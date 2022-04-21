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
