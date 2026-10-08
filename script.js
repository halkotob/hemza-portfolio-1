document.addEventListener('DOMContentLoaded', () => {
  // Keep the footer year current
  document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
    // Close the menu after picking a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
      });
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
      const title = button.closest('.card').querySelector('.card-title').textContent;
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
