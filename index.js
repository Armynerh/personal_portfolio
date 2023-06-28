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

const popUp = document.querySelector('.modal-pop');
const closeBtn = document.querySelector('.mobile-cancel');
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

closeBtn.addEventListener('click', () => { popUp.classList.remove('active'); });

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
  document.querySelectorAll('.project-btn').forEach((n, idx) => n.addEventListener('click', () => {
    popUp.classList.toggle('active');
    const project = projects[idx];

    const techlist = project.technologies.map((technology) => `<li>${technology}</li>`).join('');

    newDiv.innerHTML = `<div class='modal-container'>
          <div class="modal-img">
          <img src=${project.image1} id="img1">
          <img src=${project.image2} id="img2">
          </div>
          <div class="modal-text">
          <h3>${project.name2}</h3> <div class="modal-btn modal-btn1">
          <a class="btn" href=${project.liveLink}>See Live</a> <a href=${project.sourceLink} class="btn">See Source</a>
          </div>
          </div>
          <div class=modal-list>
          <ul>${techlist}</ul>
          </div>
          <p>${project.description}</p>
          <div class="modal-btn modal-btn2">
          <a id="icon-button" href=${project.liveLink} class="btn">See Live</a> <a href=${project.sourceLink} class="btn">See Source</a>
          </div>
          </div>`;
  }));
});
