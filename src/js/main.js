var toggle;

if (document.readyState !== 'loading') {
	init();
} else {
	window.addEventListener('DOMContentLoaded', () => {
		init();
	});  
}

function init () {

	toggle = document.getElementById('tocgle');
	fetchExtraContent(document.querySelector('#currently'));

	if (toggle !== null) {
		toggleToc(toggle);
		toggle.addEventListener('click', toggleToc);
	}

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
}

function toggleToc() {

	const toc = document.getElementById(toggle.getAttribute('aria-controls'));

	if (toggle.getAttribute('aria-expanded') === 'true') {

		toggle.textContent = "Show table of contents";
		toggle.setAttribute('aria-expanded', false);
		toc.setAttribute('aria-hidden', true);

	} else {

		toggle.textContent = "Hide table of contents";
		toggle.setAttribute('aria-expanded', true);
		toc.setAttribute('aria-hidden', false);

	}

};
