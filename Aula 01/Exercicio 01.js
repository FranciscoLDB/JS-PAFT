console.log("\n\nExercicio 01");

let altura = prompt("Digite sua altura");
let peso = prompt("Digite seu peso");
let obeso = false;
let imc = peso / (altura*altura);

if (imc >= 30) {
    obeso = true;
}
console.log("O valor do IMC para o peso de " + peso + " quilos e " + altura + " metros é de " + imc.toFixed(2));


console.log("\n\nExercicio 02");

let n = prompt("Digite um número");
let resposta = "" + n;

while (n > 1){
    if (n%2 == 0) {
        n/=2;
        resposta += " - " + n;
    } else {
        n = 3*n + 1;
        resposta += " - " + n;
    }
}
console.log(resposta);

console.log("\n\nExercicio 03");

let alturaChico = 150;
let alturaZe = 110;

while (alturaChico >= alturaZe) {
    alturaChico += 2;
    alturaZe += 3;

    console.log("Altura Chico = " + alturaChico);
    console.log("Altura Ze = " + alturaZe + "\n");
}