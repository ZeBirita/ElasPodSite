'use strict';

const menuButton = document.querySelector('[data-nav-toggle]');
const navigation = document.querySelector('[data-navigation]');
const backToTop = document.querySelector('[data-back-to-top]');

function setMenuOpen(isOpen) {
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  navigation.classList.toggle('is-open', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
}

menuButton.addEventListener('click', function () {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

navigation.addEventListener('click', function (event) {
  if (event.target.closest('a')) setMenuOpen(false);
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuButton.focus();
  }
});

document.querySelectorAll('[data-audio-player]').forEach(function (player) {
  const source = player.dataset.src.trim();
  const status = player.parentElement.querySelector('[data-audio-status]');

  if (!source) {
    player.removeAttribute('controls');
    return;
  }

  player.src = source;
  player.hidden = false;
  status.classList.add('is-ready');

  player.addEventListener('error', function () {
    status.textContent = 'Não foi possível carregar este áudio. Tente novamente mais tarde.';
    status.classList.remove('is-ready');
  });
});

const year = document.querySelector('[data-current-year]');
year.textContent = new Date().getFullYear();

window.addEventListener('scroll', function () {
  backToTop.classList.toggle('is-visible', window.scrollY > 420);
}, { passive: true });
