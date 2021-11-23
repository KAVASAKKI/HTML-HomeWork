const refs = {
  openModalBtn: document.querySelector('[data-open-modal]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  backdrop: document.querySelector('[data-backdrop]'),
};
const { openModalBtn, closeModalBtn, backdrop } = refs;

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
backdrop.addEventListener('mousedown', onBackdropClick);
window.addEventListener('keydown', onKeydown);

function openModal() {
  backdrop.classList.toggle('is-hidden');
}

function closeModal() {
  backdrop.classList.add('is-hidden');
}

function onKeydown(e) {
  const ESC_CODE_BUTTON = 'Escape';
  const currentKey = e.code;

  if (ESC_CODE_BUTTON === currentKey) {
    closeModal();
  }
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}
