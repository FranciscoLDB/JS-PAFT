const player1 = document.getElementById('p1');
const player2 = document.getElementById('p2');
const partidaSelect = document.querySelector('select');
const reset = document.getElementById('reset');

let p1 = 0;
let p2 = 0;

for(let i = 1; i <= 7; i++){
    const opcao = document.createElement('option');
    opcao.innerText = i;
    opcao.id = `op${i}`;
    partidaSelect.appendChild(opcao);
}

function maisP1(){
    p1++;
    atualizar();
}
function maisP2(){
    p2++;
    atualizar();
}
function resetarPlacar(){
    p1 = 0;
    p2 = 0;
    player1.innerHTML = p1;
    player2.innerHTML = p2;
}

reset.onclick = resetarPlacar;

reset.addEventListener('click', atualizar);

function atualizar() {
    var max = partidaSelect.options[partidaSelect.selectedIndex].value;
    player1.innerHTML = p1;
    player2.innerHTML = p2; 
    if(p1 == max){
        window.alert('Jogador 1 Ganhou!!!');
        resetarPlacar();
    }
    else if (p2 == max){
        window.alert('Jogador 2 Ganhou!!!');
        resetarPlacar();
    }
}
