document.addEventListener('DOMContentLoaded', () => {
  // Comic intro (home page). The <head> script decides whether it plays.
  const root = document.documentElement;
  const intro = document.getElementById('comic-intro');
  if (intro && root.classList.contains('intro-on')) {
    try { localStorage.setItem('ha-intro-seen', '1'); } catch (e) {}
    if (/[?&]intro\b/.test(location.search)) {
      history.replaceState(null, '', location.pathname + location.hash);
    }
    let finished = false;
    let timer;
    // ended: the CSS exit already played, so tear down now. Otherwise the
    // visitor cut it short, so play the quick exit first.
    const finish = (ended) => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      ['keydown', 'wheel', 'touchstart'].forEach(ev => window.removeEventListener(ev, skip));
      if (ended === true) {
        root.classList.remove('intro-on');
      } else {
        intro.classList.add('leaving');
        setTimeout(() => root.classList.remove('intro-on'), 400);
      }
    };
    const skip = () => finish(false);
    // The CSS timeline owns timing: finish when its exit animation ends.
    // The timer is only a fallback in case animationend never fires.
    intro.addEventListener('animationend', (e) => {
      if (e.target === intro && e.animationName === 'intro-out' && !intro.classList.contains('leaving')) finish(true);
    });
    timer = setTimeout(() => finish(true), 7000);
    intro.addEventListener('click', skip);
    ['keydown', 'wheel', 'touchstart'].forEach(ev => window.addEventListener(ev, skip, { passive: true }));
  }

  // Keep the footer year current
  document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Gameplay previews loop forever, so stop them on a still frame after 5s on
  // screen (WCAG 2.2.2). Hovering or focusing the card plays them again.
  // The still is the reduced-motion <source> next to the animated <img>.
  document.querySelectorAll('.window picture img[src$=".webp"]').forEach(img => {
    const source = img.parentElement.querySelector('source');
    const card = img.closest('.card');
    if (!source || !card || !('IntersectionObserver' in window)) return;
    const animated = img.getAttribute('src');
    const still = source.getAttribute('srcset');
    let timer;
    const settle = () => { clearTimeout(timer); timer = setTimeout(() => { img.src = still; }, 5000); };
    const replay = () => { if (img.getAttribute('src') !== animated) img.src = animated; settle(); };
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) settle(); else clearTimeout(timer);
    }, { threshold: 0.5 }).observe(img);
    card.addEventListener('mouseenter', replay);
    card.addEventListener('focusin', replay);
  });

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
    const closeNav = () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
    };
    // Close the menu after picking a link, or on Escape (focus back to the toggle)
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        closeNav();
        navToggle.focus();
      }
    });
  }

  // PDF modal (films page only)
  const modal = document.getElementById('pdf-modal');
  if (!modal) return;

  const pdfViewer = document.getElementById('pdf-viewer');
  const modalTitle = document.getElementById('pdf-modal-title');
  const closeButton = modal.querySelector('.close-button');
  const newTabBtn = document.getElementById('open-in-new-tab-btn');

  // Most phones can't render PDFs inside an iframe, so let those links
  // fall through to their default behaviour (opening in a new tab).
  const canEmbedPdf = () =>
    navigator.pdfViewerEnabled !== false &&
    !window.matchMedia('(max-width: 768px)').matches;

  document.querySelectorAll('.script-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      if (!canEmbedPdf()) return;
      e.preventDefault();
      const pdfUrl = button.getAttribute('href');
      const scriptTitle = button.closest('.card').querySelector('.card-title').textContent;
      const title = pdfUrl.includes('-first-10') ? `${scriptTitle} (first 10 pages)` : scriptTitle;
      pdfViewer.setAttribute('src', pdfUrl);
      pdfViewer.setAttribute('title', title);
      modalTitle.textContent = title;
      newTabBtn.setAttribute('href', pdfUrl);
      modal.showModal(); // Native <dialog>: traps focus and handles Escape
      document.body.classList.add('modal-open');
    });
  });

  closeButton.addEventListener('click', () => modal.close());

  // Clicking the backdrop (outside the dialog box) closes it
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });

  modal.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    pdfViewer.setAttribute('src', ''); // Unload the PDF
  });
});
