document.onmousemove = function (e) {mousePos(e);};

let mouseX = 0;
let mouseY = 0;
let isMouseDown = false;

function mousePos (e) {
    mouseX = e.pageX - window.pageXOffset;
    mouseY = e.pageY - window.pageYOffset;

    mappedX = mouseX / window.innerWidth - 0.2;
    mappedY = mouseY / window.innerHeight - 0.5;

    document.documentElement.style.setProperty('--mapped-x', mappedX);
    document.documentElement.style.setProperty('--mapped-y', -mappedY);

    return true;
}



let prevMove = 0;
let orientationMove = 0;

function handleOrientation (event) {
  if (isMouseDown) {
    prevMove = 0;
    return; // When dragging the image, stop listening for orientation
  }

  const x = -event.gamma;
  const y = event.beta - 45;
  document.documentElement.style.setProperty('--mapped-x', x);
  document.documentElement.style.setProperty('--mapped-y', y);
  prevMove = x / 80 + prevMove / 16;
  orientationMove = orientationMove - prevMove;
  if (orientationMove < -100) {
    prevMove = 0;
    orientationMove = -100;
  }
  if (orientationMove > 0) {
    prevMove = 0;
    orientationMove = 0;
  }
  document.documentElement.style.setProperty('--orientation-move', orientationMove);
}



window.addEventListener('deviceorientation', handleOrientation);

/**
 * Makes an element draggable., thx @remarkablemark
 * @param {HTMLElement} element - The element.
 */
function draggable (element) {

  if (element === null) return;

  let dragMouseX;
  let initX = -100;
  document.documentElement.style.setProperty('--orientation-move', initX);

  // mouse button down over the element
  element.addEventListener('mousedown', onMouseDown);
  element.addEventListener('touchstart', onMouseDown);
  /**
   * Listens to `mousedown` event.
   * @param {Object} event - The event.
   */
  function onMouseDown(event) {
    event.preventDefault();
    isMouseDown = true;
    prevX = (event.changedTouches) ? event.changedTouches[0].pageX : event.clientX;
  }

  // mouse button released
  document.addEventListener('mouseup', onMouseUp);
  element.addEventListener('touchend', onMouseUp);
  /**
   * Listens to `mouseup` event.
   * @param {Object} event - The event.
   */
  function onMouseUp(event) {
    isMouseDown = false;
  }

  // need to attach to the entire document
  // in order to take full width and height
  // this ensures the element keeps up with the mouse
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('touchmove', onMouseMove);

  /**
   * Listens to `mousemove` event.
   * @param {Object} event - The event.
   */
  function onMouseMove(event) {
    if (!isMouseDown) return;
    let clientX = (event.changedTouches) ? event.changedTouches[0].pageX : event.clientX;
    let changeX = clientX - prevX;
    orientationMove = changeX / window.innerWidth * 100 + orientationMove;
    // if (dragMouseX > 0) dragMouseX = 0;
    document.documentElement.style.setProperty('--orientation-move', orientationMove);
    prevX = clientX;
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  draggable(document.querySelector('.intro__portrait'));
  document.querySelector('#toggle').onclick = openMenu;
  document.querySelector('#menu').onclick = closeMenu;
  fetchExtraContent(document.querySelector('#currently'));
  document.querySelectorAll('.portfolio__image').forEach(item => {
    item.onclick = navigateToItem;
  });

});



window.onload = loadIntro();
function loadIntro() {
  loadPart('1', 1000);
  loadPart('2', 2000);
  loadPart('3', 4000);
}



document.addEventListener("scroll", loadConv);
window.addEventListener("resize", loadConv);
window.addEventListener("orientationchange", loadConv);
function loadConv() {
  loadPart('3', 500);
}



function loadPart (no, delay) {
  setTimeout(function() {
    var delayList = document.querySelectorAll('.delayed--' + no);
    delayList.forEach(function(item) {
      item.classList.remove('delayed');
    });
  }, delay);
}



function openMenu (event) {
  let menu = document.querySelector('#menu');
  menu.classList.add('open');
}

function closeMenu (event) {
  let menu = document.querySelector('#menu');
  menu.classList.remove('open');
}



function fetchExtraContent (currently) {

  if (currently === null) return;

  fetch("https://beta.readng.co/rss/collection/DO6HG")
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      const items = data.querySelectorAll("item");
      let html = `<li>reading `;
      items.forEach((el, i, arr) => {
        html += `<a href="${el.querySelector("link").innerHTML}"
          target="_blank" rel="noopener">
            ${el.querySelector("title").innerHTML}</a>`;
        if (i < arr.length - 2) {
          html += `, `;
        } else if (i < arr.length - 1) {
          html += ` and `;
        }
      });
      html += `</li>`;
      currently.insertAdjacentHTML("beforeend", html);
    });

  fetch("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=lastfmjansen&api_key=d59a4413c4942067e266cfee0c5c5ca1&format=json&limit=1")
    .then(response => response.json())
    .then(data => {
      const track = data.recenttracks.track[0];
      let html = `<li>listening to
        <a href="${track.url}" target="_blank" rel="noopener">
          ${track.name}</a> by ${track.artist["#text"]}
        </li>`;
      currently.insertAdjacentHTML("beforeend", html);
    });

}



function navigateToItem(item) {
  window.location.href = item.target.getAttribute('data-target');
}
