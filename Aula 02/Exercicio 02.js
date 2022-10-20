/* EXERCICIO 01 */
console.log('EXERCICIO 01');

let lista = [10, 125, -5 , -15, 15, 150];
let media = 0;

console.log('Números positivos:');
for (const num of lista) {
    media += num;
    if (num >= 0) {
        console.log(num);
    }
}
media = media / lista.length;
console.log(`Média dos valores: ${media.toFixed(2)}`);

/* EXERCICIO 02 */
console.log('\nEXERCICIO 02\n');

const pessoas = [{nome:"Mario",cor:"branco"}, {nome:"Pedro",cor:"branco"}, {nome:"Gabriel",cor:"negro"}, 
{nome:"Kely",cor:"outro"}, {nome:"Carlos",cor:"branco"}, {nome:"Maria",cor:"padro"}, 
{nome:"Bruna",cor:"branco"}, {nome:"Jonatas",cor:"outro"}, {nome:"Laura",cor:"negro"}, 
{nome:"Issabel",cor:"pardo"}, {nome:"Neto",cor:"branco"}, {nome:"Jean",cor:"outro"}, 
{nome:"Lucas",cor:"negro"}, {nome:"Rosimara",cor:"pardo"}, {nome:"Bianca",cor:"branco"},];

let contagem = {};
for (let pessoa of pessoas) {
    if (!contagem[pessoa.cor]) {
        contagem[pessoa.cor] = 1;
    } else {
        contagem[pessoa.cor]++;
    }
}
console.log(contagem);

/* EXERCICIO 03 */
console.log('\nEXERCICIO 03\n');

let num = Math.floor(Math.random() * 100) + 1;
let tentativa = prompt("Digite um número:");

while(tentativa != num){
    tentativa = prompt("Digite um número:");
    if (tentativa > num){
        console.log("Maior");
    } else if (tentativa < num){
        console.log("Menor");
    }
    if (tentativa <= 0 || tentativa > 100) {
        tentativa = prompt("Desistiu?");
        if(tentativa == "s")
            break;
    }
}
