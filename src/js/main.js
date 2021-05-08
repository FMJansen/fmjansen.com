document.onmousemove = function (e) {mousePos(e);};

var mouseX = 0;
var mouseY = 0;

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
let orientationMove = -100;

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

function loadPart(no, delay) {
  setTimeout(function() {
    var delayList = document.querySelectorAll('.delayed--' + no);
    delayList.forEach(function(item) {
      item.classList.remove('delayed');
    });
  }, delay);
}
