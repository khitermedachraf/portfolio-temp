const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');
const modalContainer = document.querySelector('.modalContainer');

function openModal() {
  modalContainer.style.display = 'block';
}

function closeModal() {
  modalContainer.style.display = 'none';
}

window.onclick = function global(event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
};

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modalContainer.addEventListener('click', closeModal);

// Mobile Modal 1
const seeProjectMobileModal1 = document.getElementById('seeProjectMobileModal1');
const mobileModal = document.querySelector('.mobileModal');
const closeMobile = document.querySelector('.closeMobile');
const projectImgMobile = document.querySelector('.projectImgMobile');

const projectObj = {
  name: 'Heading 1',
  image : ['./assets/projectImage00.png', './assets/projectImage01.png']
}

seeProjectMobileModal1.addEventListener('click', openMobileModal);
closeMobile.addEventListener('click', closeMobileModal);
mobileModal.addEventListener('click', closeMobileModal);

function openMobileModal() {
  console.log('It is working');
  mobileModal.style.display = "block";
  projectImgMobile.setAttribute('src', projectObj.image[1])
  
}

function closeMobileModal() {
  mobileModal.style.display = "none";
}





console.log(projectImgMobile);