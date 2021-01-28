// iniciando as variáveis
let table = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0; // 0 - (jogador 1), 1 - (jogador 2)
let simbols = ["o", "x"];



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
    let x = o = 0;  
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
        }, 100)
    }
}