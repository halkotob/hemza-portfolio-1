document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* --- Script reader: ARIA tabs, each tab controls its details and its page --- */
  const desk = document.querySelector('.desk');
  const tabs = desk ? [...desk.querySelectorAll('[role="tab"]')] : [];
  const pages = desk ? desk.querySelector('.desk-pages') : null;

  if (desk && tabs.length) {
    // Motion only answers the pointer. Keyboard switching stays instant.
    desk.addEventListener('pointerdown', () => { desk.dataset.input = 'pointer'; });
    desk.addEventListener('keydown', () => { desk.dataset.input = 'keyboard'; });

    const select = (tab, { focus = false, remember = false } = {}) => {
      tabs.forEach(t => {
        const on = t === tab;
        t.setAttribute('aria-selected', on);
        t.tabIndex = on ? 0 : -1;
        t.getAttribute('aria-controls').split(' ').forEach(id => {
          const panel = document.getElementById(id);
          if (!panel) return;
          const wasHidden = panel.hidden;
          panel.hidden = !on;
          if (on && wasHidden && panel.classList.contains('page')) {
            panel.classList.remove('entering');
            void panel.offsetWidth; // Restart the entrance if tabs are clicked quickly
            panel.classList.add('entering');
          }
        });
      });
      // The two pages under the top one take the other scripts' colors
      const others = tabs.filter(t => t !== tab).map(t => t.style.getPropertyValue('--rev'));
      pages.style.setProperty('--peek-1', others[0]);
      pages.style.setProperty('--peek-2', others[1]);
      if (focus) tab.focus();
      if (remember) history.replaceState(null, '', '#scripts/' + tab.dataset.slug);
    };

    pages.addEventListener('animationend', e => e.target.classList.remove('entering'));

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(tab, { remember: true }));
      tab.addEventListener('keydown', e => {
        const last = tabs.length - 1;
        const to = { ArrowDown: i + 1, ArrowRight: i + 1, ArrowUp: i - 1, ArrowLeft: i - 1, Home: 0, End: last }[e.key];
        if (to === undefined) return;
        e.preventDefault();
        select(tabs[(to + tabs.length) % tabs.length], { focus: true, remember: true });
      });
    });

    // Deep link: #scripts/the-squared-circle opens that script
    const fromHash = () => {
      const m = location.hash.match(/^#scripts\/([\w-]+)$/);
      const tab = m && tabs.find(t => t.dataset.slug === m[1]);
      if (tab) select(tab);
    };
    fromHash();
    if (!location.hash.startsWith('#scripts/')) select(tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs[0]);
    window.addEventListener('hashchange', fromHash);
  }

  /* --- PDF dialog. Most phones can't show a PDF in a frame, so they keep the new-tab link. --- */
  const dialog = document.getElementById('pdf-dialog');
  if (dialog) {
    const frame = document.getElementById('pdf-dialog-frame');
    const title = document.getElementById('pdf-dialog-title');
    const newTab = document.getElementById('pdf-dialog-newtab');
    const canEmbed = () => navigator.pdfViewerEnabled !== false && !matchMedia('(max-width: 820px)').matches;

    document.querySelectorAll('.pdf-link').forEach(link => {
      link.addEventListener('click', e => {
        if (!canEmbed() || e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        const href = link.getAttribute('href');
        title.textContent = link.dataset.title || link.textContent;
        frame.title = title.textContent;
        frame.src = href;
        newTab.href = href;
        dialog.showModal();
        document.documentElement.style.overflow = 'hidden';
      });
    });

    dialog.querySelector('.pdf-dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => {
      document.documentElement.style.overflow = '';
      setTimeout(() => { if (!dialog.open) frame.src = 'about:blank'; }, 200); // After the exit fade
    });
  }

  /* --- Gameplay preview loops forever: stop on the still after 5s on screen (WCAG 2.2.2).
         Hover or focus on the feature plays it again. --- */
  document.querySelectorAll('picture img[src$=".webp"]').forEach(img => {
    const source = img.parentElement.querySelector('source');
    const host = img.closest('.feature');
    if (!source || !host || !('IntersectionObserver' in window)) return;
    const animated = img.getAttribute('src');
    const still = source.getAttribute('srcset');
    let timer;
    const settle = () => { clearTimeout(timer); timer = setTimeout(() => { img.src = still; }, 5000); };
    const replay = () => { if (img.getAttribute('src') !== animated) img.src = animated; settle(); };
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) settle(); else clearTimeout(timer);
    }, { threshold: 0.5 }).observe(img);
    host.addEventListener('mouseenter', replay);
    host.addEventListener('focusin', replay);
  });
});
