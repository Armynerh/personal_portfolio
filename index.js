// Nav-bar-menu
const toggler = document.querySelector('.nav-toggle');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const toggleIcon = document.querySelector('.toggle-icon');

toggler.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
});

toggleIcon.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
});
document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
}));

// project section with Pop up window

const popUp = document.querySelector('.modal-pop');
const newDiv = document.createElement('div');
popUp.appendChild(newDiv);
const projects = [
  {
    name1: 'Multi-Post Stories Gain+Glory',
    name2: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image1: 'images/Snapshoot-Portfolio.png',
    image2: 'images/iPortfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    liveLink: 'https://armynerh.github.io/personal_portfolio/',
    sourceLink: 'See Source',
  },
  {
    name1: 'Multi-Post Stories Gain+Glory',
    name2: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image1: 'images/Snapshoot-Portfolio.png',
    image2: 'images/iPortfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    liveLink: 'https://armynerh.github.io/personal_portfolio/',
    sourceLink: 'https://github.com/Armynerh/personal_portfolio',
  },
  {
    name1: 'Multi-Post Stories Gain+Glory',
    name2: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image1: 'images/Snapshoot-Portfolio.png',
    image2: 'images/iPortfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    liveLink: 'https://armynerh.github.io/personal_portfolio/',
    sourceLink: 'https://github.com/Armynerh/personal_portfolio',
  },
  {
    name1: 'Multi-Post Stories Gain+Glory',
    name2: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image1: 'images/Snapshoot-Portfolio.png',
    image2: 'images/iPortfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    liveLink: 'https://armynerh.github.io/personal_portfolio/',
    sourceLink: 'https://github.com/Armynerh/personal_portfolio',
  },
  {
    name1: 'Multi-Post Stories Gain+Glory',
    name2: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image1: 'images/Snapshoot-Portfolio.png',
    image2: 'images/iPortfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    liveLink: 'https://armynerh.github.io/personal_portfolio/',
    sourceLink: 'https://github.com/Armynerh/personal_portfolio',
  },
  {
    name1: 'Multi-Post Stories Gain+Glory',
    name2: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image1: 'images/Snapshoot-Portfolio.png',
    image2: 'images/iPortfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    liveLink: 'https://armynerh.github.io/personal_portfolio/',
    sourceLink: 'https://github.com/Armynerh/personal_portfolio',
  },
];

// project section
const works = document.querySelector('.grid-container');
const newWorks = projects.map((project) => {
  const techlist = project.technologies.map((technology) => `<li>${technology}</li>`).join('');

  return `<div class="grid-items">
    <div class="grid-card">
        <div class="post-card">
            <h4>${project.name1}</h4>
        </div>
        <div class="post-list">
            <ul>
                ${techlist}
            </ul>
        </div>
        <div>
            <button class="btn project-btn">See Project</button>
        </div>
    </div>
    </div>`;
}).join('');

document.addEventListener('DOMContentLoaded', () => {
  works.innerHTML = newWorks;

  // pop up window
  document.querySelectorAll('.project-btn').forEach((n, idx) => n.addEventListener('click', () => {
    popUp.classList.toggle('active');
    const project = projects[idx];

    const techlist = project.technologies.map((technology) => `<li>${technology}</li>`).join('');

    newDiv.innerHTML = `
    <div class='modal-container'>
    <div class="modal-wrapper">
    <div class="mobile-cancel mobile-cancel1"><img src="images/Cancel-mobile.png"></div>
    <div class="mobile-cancel mobile-cancel2"><img src="images/abled.png"></div>
          <div class="modal-img">
          <img src=${project.image1} id="img1">
          <img src=${project.image2} id="img2">
          </div>
          <div class="modal-text">
          <h3>${project.name2}</h3> <div class="modal-btn modal-btn1">
          <a href=${project.liveLink}>See Live<span>  <img src="./images/Icon1.png" /></span></a> <a href=${project.sourceLink}>See Source<span><img src="./images/GitHub2.png" /></span></a>
          </div>
          </div>
          <div class=modal-list>
          <ul>${techlist}</ul>
          </div>
          <p>${project.description}</p>
          <div class="modal-btn modal-btn2">
          <a href=${project.liveLink}>See live<span>  <img src="./images/Icon1.png" /></span></a> <a href=${project.sourceLink}>See source<span><img src="./images/GitHub2.png" /></span></a>
          </div>
          </div>
          </div
          `;
    document.querySelectorAll('.mobile-cancel').forEach((n) => n.addEventListener('click', () => {
      popUp.classList.remove('active');
    }));
  }));
});

// contact form validation
const email = document.querySelector('#email');
const form = document.querySelector('#contact');
const message = document.querySelector('.message');
function isLowerCase(input) {
  return input === String(input).toLowerCase();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = email.value;
  if (!isLowerCase(emailValue)) {
    message.classList.add('active');
  } else {
    message.classList.remove('active');
    form.submit();
  }
});

// local storage
const fullname = document.querySelector('#fullname');
const textMessage = document.querySelector('#textbox');
form.addEventListener('submit', () => {
  const formInput = {
    fullname: fullname.value,
    email: email.value,
    textMessage: textMessage.value,
  };

  localStorage.setItem('formInput', JSON.stringify(formInput));
});

window.addEventListener('load', () => {
  const cached = localStorage.getItem('formInput');
  const formData = JSON.parse(cached);
  fullname.value = formData.fullname;
  email.value = formData.email;
  textMessage.value = formData.textMessage;
});
