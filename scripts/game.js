// iniciando as variáveis
let table = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0; // 0 - (jogador 1), 1 - (jogador 2)
let simbols = ["o", "x"];
let jogo_on = true;
let player1 = document.getElementById('sun').value
let player2 = document.getElementById('moon').value



function handleMove(position) {
  table[position] = simbols[playerTime];

  if (playerTime == 0) {
    playerTime = 1;
    document.getElementsByTagName('body')[0].style.backgroundImage = 'url(../images/lua.jpg);'
  } else {
    playerTime = 0;
    document.getElementsByTagName('body')[0].style.backgroundImage = 'url(../images/sol.jpeg);'
  }
}

function chekingGame(){ // 'x', 'x', 'x', '', '', '', '', ''
    if(jogo_on){
        if(
            (table[0] == 'x' && table[1] == 'x' && table[2] == 'x') ||  
            (table[0] == 'x' && table[3] == 'x' && table[6] == 'x') || 
            (table[0] == 'x' && table[4] == 'x' && table[8] == 'x') || 
            (table[1] == 'x' && table[4] == 'x' && table[7] == 'x') || 
            (table[2] == 'x' && table[5] == 'x' && table[8] == 'x') || 
            (table[2] == 'x' && table[4] == 'x' && table[6] == 'x') ||
            (table[3] == 'x' && table[4] == 'x' && table[5] == 'x') ||
            (table[6] == 'x' && table[7] == 'x' && table[8] == 'x')) {
            
            setTimeout(() =>{
                alert('O jogador "Lua" Ganhou :D')
                jogo_on = false
            }, 100)
        }
        if (
        (table[0] == 'o' && table[1] == 'o' && table[2] == 'o') ||  
        (table[0] == 'o' && table[3] == 'o' && table[6] == 'o') || 
        (table[0] == 'o' && table[4] == 'o' && table[8] == 'o') || 
        (table[1] == 'o' && table[4] == 'o' && table[7] == 'o') || 
        (table[2] == 'o' && table[5] == 'o' && table[8] == 'o') || 
        (table[2] == 'o' && table[4] == 'o' && table[6] == 'o') ||
        (table[3] == 'o' && table[4] == 'o' && table[5] == 'o') ||
        (table[6] == 'o' && table[7] == 'o' && table[8] == 'o')){
            setTimeout(() =>{
                alert('O jogador "Sol" Ganhou')
                jogo_on = false
            }, 100)
        }
    }
    
}

function play_alone(){
    alert('Lamentamos ,mas no momento estamos em construção e só será possivel jogar com um amigo :(')
}

function play_with_friend(){
  document.getElementById('menu').style.display = 'none'
  document.getElementById('players').style.display='block'
  
}

function start(){
    document.getElementById('stage').style.display = 'block'
    document.getElementById('players').style.display='none'
    
}