const openBtn = document.querySelector('.openBtn')
const closeBtn = document.querySelector('.closeBtn');
const modalContent = document.querySelector('.modalContent');

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modalContent.addEventListener('click', closeModal);

function openModal() {
  modalContent.style.display = "block";
}

function closeModal() {
  modalContent.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalContent) {
    modal.style.display = "none";
  }
}