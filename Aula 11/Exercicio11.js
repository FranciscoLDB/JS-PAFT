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

