document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('pdf-modal');
  const pdfViewer = document.getElementById('pdf-viewer');
  const scriptBtns = document.querySelectorAll('.script-btn');
  const closeButton = document.querySelector('.close-button');
  const newTabBtn = document.getElementById('open-in-new-tab-btn');

  scriptBtns.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const pdfUrl = button.getAttribute('href');
      pdfViewer.setAttribute('src', pdfUrl);
      newTabBtn.setAttribute('href', pdfUrl);
      modal.style.display = 'block';
    });
  });

  const closeModal = () => {
    modal.style.display = 'none';
    pdfViewer.setAttribute('src', ''); // Clear src to stop video/audio playback in iframe
  }

  closeButton.addEventListener('click', closeModal);

  window.addEventListener('click', (e) => {
    if (e.target == modal) {
      closeModal();
    }
  });

  // Close modal on 'Escape' key press
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });
});