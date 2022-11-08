// Landing icons

const icons = document.querySelectorAll('.landing__img i');
let i = 0;

setInterval(() => {
  changeIcon();
}, 4000);

function changeIcon() {
  i++;

  const currentIcon = document.querySelector('i.shown');
  currentIcon.classList.remove('shown');

  if (i === icons.length) {
    i = 1;
    icons[0].classList.add('shown');
  } else {
    currentIcon.nextElementSibling.classList.add('shown');
  }
}

// Navbar

const headerSwitch = document.querySelector('.switch');
const header = document.querySelector('.header');

headerSwitch.addEventListener('click', toggleNavbar);

function toggleNavbar() {
  header.classList.toggle('open');
}
