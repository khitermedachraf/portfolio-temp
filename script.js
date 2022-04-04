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

// Mobile Modal
const seeProject = document.querySelectorAll('.seeProject')
const mobileModal = document.querySelectorAll('.mobileModal');
const closeMobile = document.querySelector('.closeMobile');

const description0 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea';

const projectObj = {
  image: ['./assets/projectImage00.png', './assets/projectImage01.png', './assets/projectImage02.png', './assets/projectImage03.png', './assets/projectImage04.png', './assets/projectImage05.png'],
  name: ['Keeping track of hundreds of components', 'Keeping track of hundreds of components', 'Keeping track of hundreds of components', 'Keeping track of hundreds of components', 'Keeping track of hundreds of components', 'Keeping track of hundreds of components'],
  technologies: ['Ruby on rails', 'css', 'JavScript', 'html'],
  description: [description0, description0, description0, description0, description0, description0],
  liveLink: ['https://github.com/mavericks-db', '#', '#', '#', '#'],
  sourceLink: ['https://github.com/mavericks-db', '#', '#', '#', '#']
}

seeProject.forEach(element => {
  element.addEventListener('click', openMobileModal);
});

function openMobileModal(e) {
  let i = e.target.dataset.index;
  mobileModal[i].style.display = "block";
  
  let div1 = document.createElement('div');
  div1.classList.add('mobileMCContainer');

  let img1 = document.createElement('img');
  img1.classList.add('closeMobile');
  img1.setAttribute('src', './assets/close-mobileModal.svg');
  img1.addEventListener('click', closeMobileModal);
  function closeMobileModal() {
    mobileModal[i].style.display = "none";
    div1.remove();
    div2.remove();
  }

  let img2 = document.createElement('img');
  img2.classList.add('projectImgMobile');
  img2.setAttribute('src', projectObj.image[i]);
  
  let h2 = document.createElement('h2');
  h2.classList.add('projectName');;
  h2.innerHTML = projectObj.name[i];

  let ul = document.createElement('ul');
  let li0 = document.createElement('li');
  let li1 = document.createElement('li');
  let li2 = document.createElement('li');
  let li3 = document.createElement('li');
  li0.innerText = projectObj.technologies[0];
  li1.innerText = projectObj.technologies[1];
  li2.innerText = projectObj.technologies[2];
  ul.appendChild(li0);
  ul.appendChild(li1);
  ul.appendChild(li2);

  let p = document.createElement('p');
  p.classList.add('projectDescription');
  p.innerText = projectObj.description[i];

  let div2 = document.createElement('div');
  div2.classList.add('buttonContainerMobile');
  let a1 = document.createElement('a');
  a1.classList.add('liveBtn');
  let linka1 = document.createTextNode('See Live');
  a1.appendChild(linka1);
  a1.href = projectObj.liveLink[i];
  let imga1 = document.createElement('img');
  imga1.setAttribute('src', './assets/icon-live.png');
  a1.appendChild(imga1);

  let a2 = document.createElement('a');
  a2.classList.add('srcBtn');
  let linka2 = document.createTextNode('See Source');
  a2.appendChild(linka2);
  a2.href = projectObj.sourceLink[i];
  let imga2 = document.createElement('img');
  imga2.setAttribute('src', './assets/icon-source.png');
  a2.appendChild(imga1);


  div1.appendChild(img1);
  div1.appendChild(img2);
  div1.appendChild(h2);
  div1.appendChild(ul);
  div1.appendChild(p);
  div2.appendChild(a1);
  div2.appendChild(a2);
  div1.appendChild(div2);
  mobileModal[i].appendChild(div1);
}

console.log(seeProject);