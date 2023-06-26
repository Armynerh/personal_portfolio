const toggler = document.querySelector('.nav-toggle');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const toggleIcon = document.querySelector('.toggle-icon');

toggler.addEventListener('click', () =>{
    hamburgerMenu.classList.toggle('active');
});

toggleIcon.addEventListener('click', () =>{
    hamburgerMenu.classList.remove('active');
});
document.querySelectorAll('.nav-item').forEach(n => n.addEventListener("click", () =>{
    hamburgerMenu.classList.remove('active');
}))
