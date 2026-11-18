'use strict';

const menuButton = document.querySelector('[data-nav-toggle]');
const navigation = document.querySelector('[data-navigation]');
const backToTop = document.querySelector('[data-back-to-top]');

function setMenuOpen(isOpen) {
  if (!menuButton || !navigation) return;

  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  navigation.classList.toggle('is-open', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
}

if (menuButton && navigation) {
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

  window.addEventListener('resize', function () {
    if (window.innerWidth > 760 && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
    }
  });
}

const episodeLists = document.querySelectorAll('[data-episode-list]');

episodeLists.forEach(function (list) {
  const episodes = window.elasPodEpisodes;

  if (!Array.isArray(episodes)) {
    throw new Error('O catálogo central de episódios não foi carregado.');
  }

  const newestFirst = episodes.slice().sort(function (first, second) {
    return second.number - first.number;
  });
  const visibleEpisodes = list.dataset.episodeList === 'latest' ? newestFirst.slice(0, 8) : newestFirst;

  visibleEpisodes.forEach(function (episode) {
    const item = document.createElement('li');
    item.className = 'episode-card';

    const cover = document.createElement('img');
    cover.src = episode.cover;
    cover.alt = `Capa do episódio ${episode.number}: ${episode.title}`;
    cover.loading = 'lazy';
    item.appendChild(cover);

    const content = document.createElement('div');
    content.className = 'episode-content';

    const meta = document.createElement('p');
    meta.className = 'episode-meta';
    const number = document.createElement('span');
    number.textContent = `Episódio ${String(episode.number).padStart(2, '0')}`;
    const availability = document.createElement('span');
    const spotifyEpisode = episode.audioUrl.match(/^https:\/\/open\.spotify\.com\/episode\/([A-Za-z0-9]+)/);
    availability.textContent = episode.audioUrl
      ? (episode.duration || (spotifyEpisode ? 'Spotify' : 'Ouvir agora'))
      : 'Em breve';
    meta.append(number, availability);
    content.appendChild(meta);

    const title = document.createElement('h3');
    title.textContent = episode.title;
    content.appendChild(title);

    const description = document.createElement('p');
    description.className = 'episode-description';
    description.textContent = episode.description;
    content.appendChild(description);

    if (episode.audioUrl) {
      let player;
      if (spotifyEpisode) {
        item.classList.add('episode-card--spotify');
        player = document.createElement('iframe');
        player.className = 'episode-player-embed';
        player.src = `https://open.spotify.com/embed/episode/${spotifyEpisode[1]}`;
        player.title = `Reproduzir episódio ${episode.number} no Spotify`;
        player.loading = 'lazy';
        player.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
        player.setAttribute('allowfullscreen', '');
        player.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      } else {
        player = document.createElement('audio');
        player.className = 'episode-player';
        player.controls = true;
        player.preload = 'none';
        player.src = episode.audioUrl;
        player.setAttribute('aria-label', `Ouvir episódio ${episode.number}`);
      }
      content.appendChild(player);
    } else {
      const status = document.createElement('p');
      status.className = 'audio-status';
      status.textContent = 'Áudio em breve';
      content.appendChild(status);
    }

    item.appendChild(content);
    list.appendChild(item);
  });
});

document.querySelectorAll('[data-nav-page]').forEach(function (link) {
  if (link.dataset.navPage === document.body.dataset.page) {
    link.setAttribute('aria-current', 'page');
  }
});

const year = document.querySelector('[data-current-year]');
if (year) year.textContent = new Date().getFullYear();

if (backToTop) {
  function updateBackToTop() {
    backToTop.classList.toggle('is-visible', window.scrollY > 420);
  }

  window.addEventListener('scroll', updateBackToTop, { passive: true });
  updateBackToTop();
}
