if (document.readyState !== 'loading') {
  init();
} else {
  window.addEventListener('DOMContentLoaded', () => {
    init();
  });  
}

function init () {
  document.querySelector('#toggle').onclick = openMenu;
  document.querySelector('#menu').onclick = closeMenu;
  fetchExtraContent(document.querySelector('#currently'));
  console.log('did I do something stupid? Let me know with a PR or issue 🌸 https://github.com/fmjansen/fmjansen.com');
}

function openMenu () {
  let menu = document.querySelector('#menu');
  menu.classList.add('open');
}

function closeMenu () {
  let menu = document.querySelector('#menu');
  menu.classList.remove('open');
}

function fetchExtraContent (currently) {

  if (currently === null) return;

  fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=lastfmjansen&api_key=d59a4413c4942067e266cfee0c5c5ca1&format=json&limit=1")
    .then(response => response.json())
    .then(data => {
      const track = data.recenttracks.track[0];
      let html = `...listening to
        <a href="${track.url}" rel="noopener">
          ${track.name}</a> by ${track.artist["#text"]} and...`;
      currently.insertAdjacentHTML("beforeend", html);
    });

}
