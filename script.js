const toggle = document.querySelector('.header__toggle');
const search = document.querySelector('.search');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const html = document.querySelector('html');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
  search.classList.toggle('active');
  nav.classList.toggle('active');
  header.classList.toggle('active');
  html.classList.toggle('active');
  body.classList.toggle('active');

  if (document.body.classList.contains('active')) {
    window.addEventListener('touchmove', function (event) {
      event.preventDefault();
    });
  }
});
