const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');
const modalContent = document.querySelector('.modalContent');

function openModal() {
  modalContent.style.display = 'block';
}

function closeModal() {
  modalContent.style.display = 'none';
}

window.onclick = function global(event) {
  if (event.target === modalContent) {
    modalContent.style.display = 'none';
  }
};

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modalContent.addEventListener('click', closeModal);