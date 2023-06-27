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
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: 'images/modal.jpg',
    technologies: ['Html', 'CSS', 'Javascript'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },
  {
    name: 'project-name1',
    description: 'some description',
    image: 'img',
    technologies: ['Html', 'CSS'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },
  {
    name: 'project-name2',
    description: 'some description',
    image: 'img',
    technologies: ['Html', 'CSS'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },
  {
    name: 'project-name3',
    description: 'some description',
    image: 'img',
    technologies: ['Html', 'CSS'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },
  {
    name: 'project-name4',
    description: 'some description',
    image: 'img',
    technologies: ['Html', 'CSS'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },
  {
    name: 'project-name5',
    description: 'some description',
    image: 'img',
    technologies: ['Html', 'CSS'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },
];

document.querySelectorAll('.btn').forEach((n, idx) => n.addEventListener('click', () => {
  popUp.classList.toggle('active');
  const project = projects[idx];

  const techlist = project.technologies.map((technology) => `<li>${technology}</li>`).join('');

  newDiv.innerHTML = `<div class='modal-container'>
        <div class="modal-img">
        <img src=${project.image}>
        </div>
        <h3>${project.name}</h3>
        <div class=modal-list>
        <ul>${techlist}</ul>
        </div>
        <p>${project.description}</p>
        <div class="modal-btn">
        <button class="btn">${project.liveLink}</button> <button class="btn">${project.sourceLink}</button>
        </div>
        </div>`;
}));

closeBtn.addEventListener('click', () => { popUp.classList.remove('active'); });
