/*Exercicio 01
Crie a função justDate que recebe uma data e retorna a mesma data, 
mas com os campos de tempo zerados
*/
console.log("---------------------");
console.log("EXERCICIO 01\n");

function justDate(data){
    data.setHours(0);
    data.setMilliseconds(0);
    data.setMinutes(0);
    data.setSeconds(0);
    return data;
}

const data = new Date();
console.log(data.toLocaleString("pt-br"));
console.log(justDate(data).toLocaleString("pt-br"));

/*Exercicio 02
Crie as funções de comparação de datas: before e after. Adicione um 
parâmetro opcional inclusive com valor padrão false que permite 
considerar também a própria data.
*/
console.log("---------------------");
console.log("EXERCICIO 02\n");

function before(data1, data2, opcional="false"){
    return data1.getTime() < data2.getTime() ? true : false;    
}
function after(data1, data2, opcional="false"){
    return data1.getTime() > data2.getTime() ? true : false;    
}

const data21 = new Date(2020, 1, 15);
const data22 = new Date(2021, 8, 27);
const data23 = new Date(2022, 6, 30);

console.log(before(data21, data22)); //true
console.log(before(data22, data23)); //true
console.log(before(data23, data21)); //false
console.log(after(data23, data22)); //true

/*Exercicio 03
Crie a função between que recebe uma data, uma data de inicio, outra 
de fim e uma terceira data. Teste se a data está no meio desse intervalo. 
Adicione um objeto desestruturado opcional no quarto parâmetro para 
permitir os parâmetros opcionais inclusiveStart e inclusiveEnd
*/
console.log("---------------------");
console.log("EXERCICIO 03\n");

function between(data, inicio, fim, opcional={inclusiveStart, inclusiveEnd} = false){
    let dI;
    let dF;
    if(opcional){
        dI = opcional.inclusiveStart.getTime();
        dF = opcional.inclusiveEnd.getTime();
        if (data.getTime() > dI && data.getTime() < dF)
            return true;
        return false;
    } else {
        dI = inicio.getTime()
        dF = fim.getTime()
        if (data.getTime() > dI && data.getTime() < dF)
            return true;
        return false;
    }
}

const data31 = new Date(2020, 1, 15);
const data32 = new Date(2021, 8, 27);
const data33 = new Date(2022, 6, 30);
const opc = {
    inclusiveStart: new Date(2002, 1, 1),
    inclusiveEnd: new Date(2020, 12, 31)
};
console.log(between(data32, data31, data33, opc));
console.log(between(data32, data31, data33));


/*Exercicio 04
Crie uma função que recebe uma data inicial, um número n e um 
intervalo de tempo. Ela deve retornar uma lista, contando as n próximas 
datas considerando esse intervalo de tempo.
*/
console.log("---------------------");
console.log("EXERCICIO 04\n");


/*Exercicio 05
Crie uma lista de álbuns ordenada por ano. Não altere a lista original 
de álbuns.
*/
console.log("---------------------");
console.log("EXERCICIO 05\n");

/*Exercicio 06
 Crie a função paginador que recebe uma lista e um tamanho de 
página. Ela deve retonar outra função que quando chamada com um 
número de página, retorne apenas os elementos daquela página
*/
console.log("---------------------");
console.log("EXERCICIO 06\n");

/*Exercicio 07
Crie a função media, que recebe uma lista e opcionalmente um nome de campo. 
    • Caso o nome de campo seja fornecido, calcule a média dos valores desse 
    campo
    • Caso não seja, faça a média utilizando os próprios elementos da lista
    • Exemplo: 
let avg = media(albuns, "nota");
let avg2 = media([1,2,3,4,5]);
*/
console.log("---------------------");
console.log("EXERCICIO 07\n");