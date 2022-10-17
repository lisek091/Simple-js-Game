let gameStart = 0;
let player = 1;
function start() {
  reset();
  document.getElementById('box').style.pointerEvents = 'all';
  document.getElementById('box').style.background = 'none';
}
function reset() {
  const odNowa = document.getElementsByClassName('blok');
  gameStart = 1;
  player = 1;
  document.getElementById('box').style.pointerEvents = 'all';
  for (let i = 0; i < odNowa.length; i++) {
    odNowa[i].innerHTML = '';
  }
}
function targetClick(clicked) {
  if (document.getElementById(clicked).innerHTML != '') {
    alert('To miejsce juz jest zajęte, wybierz inne!');
  } else {
    if (player == 1) {
      document.getElementById(clicked).innerHTML = 'X';
      checkForWin();
      player = 2;
    } else {
      document.getElementById(clicked).innerHTML = 'O';
      checkForWin();
      player = 1;
    }
  }
}
function gameStop() {
  document.getElementById('box').style.pointerEvents = 'none';
}
function checkForWin() {
  if (
    (document.getElementById('blok1').innerHTML === 'O' &&
      document.getElementById('blok2').innerHTML === 'O' &&
      document.getElementById('blok3').innerHTML === 'O') ||
    (document.getElementById('blok1').innerHTML === 'X' &&
      document.getElementById('blok2').innerHTML === 'X' &&
      document.getElementById('blok3').innerHTML === 'X')
  ) {
    alert('Wygrał gracz: ' + player);
    gameStart = 0;
    gameStop();
    //gorny pasek
  }
  if (
    (document.getElementById('blok4').innerHTML === 'O' &&
      document.getElementById('blok5').innerHTML === 'O' &&
      document.getElementById('blok6').innerHTML === 'O') ||
    (document.getElementById('blok4').innerHTML === 'X' &&
      document.getElementById('blok5').innerHTML === 'X' &&
      document.getElementById('blok6').innerHTML === 'X')
  ) {
    alert('Wygrał gracz: ' + player);
    gameStart = 0;
    gameStop();
    //srodkowy wiersz pasek
  }
  if (
    (document.getElementById('blok7').innerHTML === 'O' &&
      document.getElementById('blok8').innerHTML === 'O' &&
      document.getElementById('blok9').innerHTML === 'O') ||
    (document.getElementById('blok7').innerHTML === 'X' &&
      document.getElementById('blok8').innerHTML === 'X' &&
      document.getElementById('blok9').innerHTML === 'X')
  ) {
    alert('Wygrał gracz: ' + player);
    gameStart = 0;
    gameStop();
    //dolny pasek
  }
  if (
    (document.getElementById('blok1').innerHTML === 'O' &&
      document.getElementById('blok4').innerHTML === 'O' &&
      document.getElementById('blok7').innerHTML === 'O') ||
    (document.getElementById('blok1').innerHTML === 'X' &&
      document.getElementById('blok4').innerHTML === 'X' &&
      document.getElementById('blok7').innerHTML === 'X')
  ) {
    alert('Wygrał gracz: ' + player);
    gameStart = 0;
    gameStop();
    //lewy pasek
  }
  if (
    (document.getElementById('blok2').innerHTML === 'O' &&
      document.getElementById('blok5').innerHTML === 'O' &&
      document.getElementById('blok8').innerHTML === 'O') ||
    (document.getElementById('blok2').innerHTML === 'X' &&
      document.getElementById('blok5').innerHTML === 'X' &&
      document.getElementById('blok8').innerHTML === 'X')
  ) {
    alert('Wygrał gracz: ' + player);
    gameStart = 0;
    gameStop();
    //sordkowy pionowy pasek
  }
  if (
    (document.getElementById('blok3').innerHTML === 'O' &&
      document.getElementById('blok6').innerHTML === 'O' &&
      document.getElementById('blok9').innerHTML === 'O') ||
    (document.getElementById('blok3').innerHTML === 'X' &&
      document.getElementById('blok6').innerHTML === 'X' &&
      document.getElementById('blok9').innerHTML === 'X')
  ) {
    alert('Wygrał gracz: ' + player);
    gameStart = 0;
    gameStop();
    //gorny pasek
  }
  if (
    (document.getElementById('blok1').innerHTML === 'O' &&
      document.getElementById('blok5').innerHTML === 'O' &&
      document.getElementById('blok9').innerHTML === 'O') ||
    (document.getElementById('blok1').innerHTML === 'X' &&
      document.getElementById('blok5').innerHTML === 'X' &&
      document.getElementById('blok9').innerHTML === 'X')
  ) {
    alert('Wygrał gracz: ' + player);
    gameStart = 0;
    gameStop();
    //skos gora lewa prawy dol
  }
  if (
    (document.getElementById('blok3').innerHTML === 'O' &&
      document.getElementById('blok5').innerHTML === 'O' &&
      document.getElementById('blok7').innerHTML === 'O') ||
    (document.getElementById('blok3').innerHTML === 'X' &&
      document.getElementById('blok5').innerHTML === 'X' &&
      document.getElementById('blok7').innerHTML === 'X')
  ) {
    alert('Wygrał gracz: ' + player);
    gameStart = 0;
    gameStop();
    //skos gora prawa lewy dol
  }
  if (
    document.getElementById('blok1').innerHTML != '' &&
    document.getElementById('blok2').innerHTML != '' &&
    document.getElementById('blok3').innerHTML != '' &&
    document.getElementById('blok4').innerHTML != '' &&
    document.getElementById('blok5').innerHTML != '' &&
    document.getElementById('blok6').innerHTML != '' &&
    document.getElementById('blok7').innerHTML != '' &&
    document.getElementById('blok8').innerHTML != '' &&
    document.getElementById('blok9').innerHTML != ''
  ) {
    if (gameStart === 1) {
      alert('Remis');
      gameStop();
    }
  }
}

// powyzej gra dla 2 osob ponizej vs SI
function analyze() {}
