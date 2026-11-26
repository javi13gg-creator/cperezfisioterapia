const menu = document.querySelector('.site-nav');
const toggle = menu.querySelector('.menu-toggle');

menu.classList.add('interactive');
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!menu.contains(event.target)) toggle.setAttribute('aria-expanded', 'false');
});
