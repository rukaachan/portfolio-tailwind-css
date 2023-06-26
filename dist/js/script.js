// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger & Navbar
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

// jika di klick maka akan memunculkan hamburger mobile
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klick di luar hamburger
// jika tidak di klick dalam nvabar/hamburgermenu, maka akan menutup
window.addEventListener('click', (e) => {
  if (e.target !== navMenu && e.target !== hamburger) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// darkMode
const darkMode = document.querySelector('#darkToggle');
const html = document.querySelector('html');

darkMode.addEventListener('click', () => {
  if (darkMode.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'white';
  }
});

// pindah posisi toggle sesuai mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  darkMode.checked = true;
} else {
  darkMode.checked = false;
}
