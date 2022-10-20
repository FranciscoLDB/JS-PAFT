/* EXERCICIO 01 */
console.log("---------------------");
console.log("EXERCICIO 01\n"); 
function mais1(p1, p2) {
    return p1+p2;
}

const mais2 = function(p1, p2) {
    return p1 + p2;
}

const mais3 = (p1, p2) => p1 + p2;

console.log(`5 + 25 == ${mais1(5, 25)}`);
console.log(`50 + 75 == ${mais2(50, 75)}`);
console.log(`25 + 25 == ${mais3(25, 25)}`);

/* EXERCICIO 02 */
console.log("---------------------");
console.log("EXERCICIO 02\n"); 
function menos(p1, p2) {
    if(typeof p2 != 'number')
        return -p1;
    return p1 - p2;
}

console.log(menos(10)); //Imprime -10
console.log(menos(5,2)); //Imprime 3

/* EXERCICIO 03
Crie uma função eCrescente que teste se a lista informada é ou não 
crescente. A sequencia não será considerada crescente se houver 
um número menor que seu antecessor imediato
*/
console.log("---------------------");
console.log("EXERCICIO 03\n"); 
function eCrescente(lista) {
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < lista[i-1]) {
            return console.log("Não é crescente!");
        }
    }
    return console.log("É crescente!");
}
let lista1 = [1, 10, 15, 50];
let lista2 = [1, 5, 3, 50];
eCrescente(lista1);
eCrescente(lista2);

/* EXERCICIO 04 
Crie a função maior, que encontre o maior entre todos os valores passados em 
seus argumentos. 
*/
console.log("---------------------");
console.log("EXERCICIO 04\n");

function maior(...valores) {
    let vMaior = 0;
    for (let valor of valores) {
        if (valor > vMaior)
            vMaior = valor;
    }

    return vMaior;
}

console.log(maior(1,10,-1,5)); //Imprime 10
console.log(maior(1,-100,5)); //Imprime 5

/* EXERCICIO 05 
Escreva sua própria versão da função join. Esta função recebe uma lista e um separador (por padrão ",") e gera o texto dos objetos em seu interior separados por esse separador. Não se esqueça que o separador não ocorre após o último objeto da lista
*/
console.log("---------------------");
console.log("EXERCICIO 05\n");

function join(lista, separador = ",") {
    let texto = "";
    for (let i = 0; i < lista.length; i++) {
        texto += lista[i]
        if (i < lista.length - 1){
            texto += separador;
        }
    }

    return texto;
}

console.log(join(['ola', 'eu', 'sou', 'o', 'goku', 'e', 'nao', 'o', 'vedita'], "/ "));

/* EXERCICIO 06 
Crie uma função que receba uma lista de objetos e um campo, e retorne uma lista 
com todos os valores desse campo sem repetição
*/
console.log("---------------------");
console.log("EXERCICIO 06\n");

function exercicio_06(lista, campo) {
    const resultados = {};
    for (const valor of valores) {
        resultados[valor[campo]] = true;
    }
    return Object.keys(resultados);
}



/* EXERCICIO 07
Escreva a versão não recursiva e a 
recursiva de uma função para calcular o n-ésimo termo da sequencia de fibonnaci:
*/
console.log("---------------------");
console.log("EXERCICIO 07\n");

function calc_fibo(n) {
    let resposta = "";
    let num = 0;
    let num1 = 1;
    let num2 = 0;
    for(let i = 0; i < n; i++){
        num2 = num1;
        num1 = num;
        num = num1 + num2;
        resposta += (i < n-1) ? num + "-" : num;
    }

    return resposta;
}
let fibo = "";
const fibo_recursiva = function (n, n1, n2, vezes, c) {
    if (c < vezes){
        n2 = n1;
        n1 = n;
        n = n1 + n2;
        fibo += (c < vezes-1) ? n + "-" : n;
        fibo_recursiva(n, n1, n2, vezes, c+1);
    }
}
const fib3 = n => n <= 1 ? 1 : fib3(n-1) + fib3(n-2);

console.log(calc_fibo(10));

fibo_recursiva(0, 1, 0, 20, 0);
console.log(fibo);

/* EXERCICIO 08 
Crie uma função mapear que aceite um array e uma função de 
mapeamento. Essa função recebe um elemento do array, realiza sobre ele 
qualquer cálculo, retornando outro. 
• Exemplo:
const dobro = mapear([1,2,3,4], x => x * 2);
console.log(dobro); //[2,4,6,8]
*/
console.log("---------------------");
console.log("EXERCICIO 08\n");

const dobro = mapear([1,2,3,4,5], x => x * 2);
const quad = mapear([1,2,3,4,5], x => x * x);
const parQuad = mapear([1,2,3,4,5], x => x%2 == 0 ? x*x : x);

function mapear(lista, fmap) {
    let mapeada = [];
    for(let item of lista){
        mapeada.push(fmap(item));
    }
    return mapeada;
}
console.log(dobro);
console.log(quad); 
console.log(parQuad); 

/* EXERCICIO 09 
Crie a função Collatz que aceita como parâmetro o elemento inicial da 
sequencia de Collatz e retorna uma função. A cada chamada dessa função, 
retorne o próximo elemento da sequencia
Se o número n for par, o próximo é n / 2
Se for ímpar é 3n+1
A sequencia termina em 1


*/
console.log("---------------------");
console.log("EXERCICIO 09\n");

function collatz(elem) {
    let inicio = elem;
    return function() {
        if (elem % 2 == 0) {
            elem /= 2;
        } else {
            elem = 3 * inicio + 1;
        }
        return elem;
    }
}

const seq = collatz(5);
console.log(seq()); //16
console.log(seq()); //8
console.log(seq()); //4
console.log(seq()); //2
console.log(seq()); //1

/* EXERCICIO 10 
Crie a função verbose que recebe uma função como parâmetro e retorna outra, 
que imprime no console toda chamada que for feita na função original com seu resultado.
*/
console.log("---------------------");
console.log("EXERCICIO 10\n");

function verbose(fn) {
    return function(...values) {
        const result = fn(...values);
        console.log(`${fn.name}(${values.join(",")}) = ${result}`);

        return result;
    }
}
const soma = (a, b) => a + b;
const sum = verbose(soma);
sum(5,2); //Imprime soma(5,2) = 7

console.log("---------------------");

/*11. Crie a função fixar que aceita uma função f e valores de parâmetros.
Ela retorna outra função que chama f com esses parâmetros 
passados por primeiro como se estivessem “fixos”.
Exemplos:
*/
function log(modulo, nivel, texto) {
    console.log(`${nivel}: ${texto} (${modulo})`)
}
function fixar(fn, ...esquerda) {
    return function(...direita) {
        return fn(...esquerda, ...direita);
    }
}

let logAula = fixar(log, `aula.js`, 'INFO');
logAula("Exemplo");  //Imprime INFO: Exemplo (aula.js)
logAula("PUCPR");  //Imprime INFO: PUCPR (aula.js)

let soma10 = fixar(soma, 10);

console.log(soma10(50)); //imprime 60