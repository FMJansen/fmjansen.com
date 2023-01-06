if (document.readyState !== 'loading') {
  init();
} else {
  window.addEventListener('DOMContentLoaded', () => {
    init();
  });  
}

function init () {
  fetchExtraContent(document.querySelector('#currently'));
  console.log('did I do something stupid? Let me know with a PR or issue 🌸 https://github.com/fmjansen/fmjansen.com');
}

function fetchExtraContent (currently) {

  if (currently === null) return;

  fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=lastfmjansen&api_key=d59a4413c4942067e266cfee0c5c5ca1&format=json&limit=1")
    .then(response => response.json())
    .then(data => {
      const track = data.recenttracks.track[0];
      let html = `<li>…listening to
        <a href="${track.url}" rel="noopener">
          ${track.name}</a> by ${track.artist["#text"]}
        </li>`;
      currently.insertAdjacentHTML("beforeend", html);
    });

  fetch("https://oku.club/api/collections/user/fmjansen/reading")
    .then(response => response.json())
    .then(data => {
      const books = data.books;
      let html = `<li>…reading any of these books
        <ul>`;
        books.forEach((book, i) => {
          html += `<li>
            <a href="https://oku.club/book/${book.slug}" rel="noopener">
            ${book.title}</a> by `;
          book.authors.forEach(author => {
            html += `${author.name}, `
          });
          html = html.slice(0, -2);
          html += `</li>`;
        });
      html += `</ul></li>`;
      currently.insertAdjacentHTML("beforeend", html);
    });
}


