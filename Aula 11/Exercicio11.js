/*Exercicio 01
Refaça o exercício 5 da aula passada e os exercícios anteriores
utilizando async e await.
*/
console.log("---------------------");
console.log("EXERCICIO 01\n");

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        const result = [];
        for (let word of words) {
            if (typeof word !== 'string') {
                reject(word);
                return;
            }
            result.push(word.toUpperCase());
        }
        resolve(result);
    });
}
function sortWords(words) {
    return new Promise((resolve, reject) => {
       resolve([...words].sort());
    });
}

makeAllCaps(["carambola", "abacaxi", "banana"])
   .then(sortWords)
   .then(console.log)
   .catch(v => console.log("Não é um texto: " + v));

/*Exercicio 02
Usando async e await crie uma página que calcula o
fibonati de um número mostrando o cálculo passo a
passo.
*/
console.log("---------------------");
console.log("EXERCICIO 02\n");

function calc_fibo(n) {
    let resposta = [];
    let num = 0;
    let num1 = 1;
    let num2 = 0;
    for(let i = 0; i < n; i++){
        num2 = num1;
        num1 = num;
        num = num1 + num2;
        resposta.push(num);
    }
    return resposta;
}
const fibo = calc_fibo(6); 

const delayedPrint = (text, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(text);
            resolve();
        }, delay)
    })
}
async function printFibo(){
    //console.log(fibo.length());
    for(let i = 0; i < fibo.length() - 1; i++){
        await delayedPrint(`${fibo[i]} `,500);
    }
}
printFibo();

/*Exercicio 03
Usando programação assíncrona, crie uma webpage que
realize um timer ou cronometro.
*/
console.log("---------------------");
console.log("EXERCICIO 03\n");


/*Exercicio 04
Usando programação assíncrona, crie uma webpage que
realize um jogo de adivinhe o número, onde o usuário
entra com um número, e ele verifique se o número está
certo ou não após 3 segundos. Depois disso, após 5
segundos ele deixa o usuário tentar novamente.
*/
console.log("---------------------");
console.log("EXERCICIO 04\n");

