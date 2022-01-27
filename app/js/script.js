let len = document.querySelectorAll('.play-btn').length;
let buttons = document.querySelectorAll('.play-btn');

for (let i = 0; i < len; i++) {
  buttons[i].addEventListener('mouseover', function () {
    let text = this.innerHTML;
    console.log(text);

    audioPlay(text);

    // add active class
    var current = document.getElementsByClassName('active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }
    this.className += ' active';

  });
}

// keypress
document.addEventListener('keypress', function (event) {
  var text = event.key;
  audioPlay(text);
  addClass(text);
})

// add active class
function addClass(text) {
  var selectButton = document.querySelector("." + text);
  selectButton.classList.add('active');

  setTimeout(function (){
    selectButton.classList.remove('active');
  }, 1000);
};


function audioPlay(text) {
  switch (text) {
    case 'a':
      var audio = new Audio('./../audio/a.wav');
      audio.play();
      break;

    case 'b':
      var audio = new Audio('audio/b.wav');
      audio.play();
      break;

    case 'c':
      var audio = new Audio('audio/c.wav');
      audio.play();
      break;

    case 'd':
      var audio = new Audio('audio/d.wav');
      audio.play();
      break;

    case 'e':
      var audio = new Audio('audio/e.wav');
      audio.play();
      break;

    case 'f':
      var audio = new Audio('audio/f.wav');
      audio.play();
      break;

    case 'g':
      var audio = new Audio('audio/g.wav');
      audio.play();
      break;

    case 'h':
      var audio = new Audio('audio/h.wav');
      audio.play();
      break;

    case 'i':
      var audio = new Audio('audio/i.wav');
      audio.play();
      break;

    case 'j':
      var audio = new Audio('audio/j.wav');
      audio.play();
      break;

    case 'k':
      var audio = new Audio('audio/k.wav');
      audio.play();
      break;

    case 'l':
      var audio = new Audio('audio/l.wav');
      audio.play();
      break;

    case 'm':
      var audio = new Audio('audio/m.wav');
      audio.play();
      break;

    case 'm':
      var audio = new Audio('audio/m.wav');
      audio.play();
      break;

    case 'n':
      var audio = new Audio('audio/n.wav');
      audio.play();
      break;

    case 'o':
      var audio = new Audio('audio/o.wav');
      audio.play();
      break;

    case 'p':
      var audio = new Audio('audio/p.wav');
      audio.play();
      break;

    case 'q':
      var audio = new Audio('audio/q.wav');
      audio.play();
      break;

    case 'r':
      var audio = new Audio('audio/r.wav');
      audio.play();
      break;

    case 's':
      var audio = new Audio('audio/s.wav');
      audio.play();
      break;

    case 't':
      var audio = new Audio('audio/t.wav');
      audio.play();
      break;

    case 'u':
      var audio = new Audio('audio/u.wav');
      audio.play();
      break;

    case 'v':
      var audio = new Audio('audio/v.wav');
      audio.play();
      break;

    case 'w':
      var audio = new Audio('audio/w.wav');
      audio.play();
      break;

    case 'x':
      var audio = new Audio('audio/x.wav');
      audio.play();
      break;

    case 'y':
      var audio = new Audio('audio/y.wav');
      audio.play();
      break;

    case 'z':
      var audio = new Audio('audio/z.wav');
      audio.play();
      break;
  }

}
