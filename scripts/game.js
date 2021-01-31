// iniciando as variáveis
let table = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0; // 0 - (jogador 1), 1 - (jogador 2)
let simbols = ["o", "x"];
let jogo_on = true;
let player1 = player2 = 'Jogador';


let possibilities = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function beginning(){
  table = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  simbols = ["o", "x"];
  jogo_on = true;
  player1 = player2 = 'Jogador';
  let squares = document.querySelectorAll('[class="square"]')
  squares.forEach((e) =>{
    e.innerHTML = ''
    e.removeAttribute('win')
  })
}

function handleMove(position) {
  table[position] = simbols[playerTime];

  if (playerTime == 0) {
    playerTime = 1;
    document.getElementsByTagName("body")[0].style.backgroundImage =
      "url(../images/lua.jpg);";
  } else {
    playerTime = 0;
    document.getElementsByTagName("body")[0].style.backgroundImage =
      "url(../images/sol.jpeg);";
  }
}

function chekingGame() {
  if (jogo_on) {
    for (let i = 0; i < possibilities.length; i++) {
      let pos1 = possibilities[i][0];
      let pos2 = possibilities[i][1];
      let pos3 = possibilities[i][2];

      if (
        table[pos1] == table[pos2] &&
        table[pos1] == table[pos3] &&
        table[pos1] != ""
      ) {
        jogo_on = false;
        let squares_win = document.getElementsByClassName('square')
        squares_win[pos1].setAttribute('win', '')
        squares_win[pos2].setAttribute('win', '')
        squares_win[pos3].setAttribute('win', '')
        setTimeout(() => {
          let winner = playerTime == 0 ? player1: player2
          alert(`${winner} ganhou essa partida :D`);
        }, 100);
      }
    }
  }
}

function play_alone() {
  alert(
    "Lamentamos ,mas no momento estamos em construção e só será possivel jogar com um amigo :("
  );
}

function play_with_friend() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("players").style.display = "block";
}

function start() {
  document.getElementById("stage").style.display = "block";
  document.getElementById("players").style.display = "none";
  document.getElementsByClassName('reiniciar')[0].style.display = 'block'
  player1 = document.getElementById("sun").value != '' ? document.getElementById("sun").value: 'Jogador 1';
  player2 = document.getElementById("moon").value != '' ? document.getElementById("moon").value: 'Jogador 2';

}
