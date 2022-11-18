const albuns = [
    {nome: "Mais", cantor: "Marisa monte", ano: 1991, nota: 8.5},
    {nome: "A tempestade", cantor: "Legião Urbana", ano: 1996, nota: 9.5},
    {nome: "Domingo", cantor: "Titãs", ano: 1995, nota: 7.5},
    {nome: "Ouro de Minas", cantor: "Roupa Nova", ano: 2001, nota: 8},
    {nome: "Como estão vocês", cantor: "Titãs", ano: 2003, nota: 7},
    {nome: "Troco Likes", cantor: "Thiago Iorc", ano: 2015, nota: 4.5},
    {nome: "Dois", cantor: "Legião Urbana", ano: 1986, nota: 10},
    {nome: "Radiola", cantor: "Skank", ano: 2004, nota: 6.5},
    {nome: "Roupa acústico", cantor: "Roupa Nova", ano: 2004, nota: 9},
    {nome: "Umbilical", cantor: "Thiago Iorc", ano: 2011, nota: 3.5},
    {nome: "Barulhinho bom", cantor: "Marisa monte", ano: 1996, nota: 7.5}
];

const cantores = [
    {nome: "Vinícius de Moraes", estilo: "MPB"},
    {nome: "Rita Lee", estilo: "Rock"},
    {nome: "Marisa monte", estilo: "MPB"},
    {nome: "Legião Urbana", estilo: "Rock"},
    {nome: "Titãs", estilo: "Rock"},
    {nome: "Roupa Nova", estilo: "Pop rock"},
    {nome: "Thiago Iorc", estilo: "Nova MPB"},
    {nome: "Skank", estilo: "Pop rock"}
];

/*Exercicio 01
Gere uma lista de objetos com o nome e ano de todos os álbuns da Marisa Monte
*/
console.log("---------------------");
console.log("EXERCICIO 01\n");

const albunsMarisa = albuns
    .filter(a => a.cantor === "Marisa monte")
    .map(a => ({nome: a.nome, ano: a.ano}));
console.log(albunsMarisa);

/*Exercicio 02
Gere uma lista contendo o nome de todos os cantores e álbuns. A lista deve conter só os textos, não objetos.
*/
console.log("---------------------");
console.log("EXERCICIO 02\n");

let cantoresEAlbuns = albuns.flatMap(a => [a.cantor, a.nome]);
console.log(cantoresEAlbuns);

/*Exercicio 03
Calcule a média da nota dos discos anteriores ao ano de 2005
*/
console.log("---------------------");
console.log("EXERCICIO 03\n");

const discosAntigos = albuns
    .filter(a => a.ano < 2005);
const somaNotas = discosAntigos.reduce((soma, album) => soma += album.nota, 0);
const mediaNotas = somaNotas / discosAntigos.length;
console.log(`Média das notas: ${mediaNotas.toFixed(2)}`);

/*Exercicio 04
Gere uma lista contendo o nome de todos os cantores, sem repetições
*/
console.log("---------------------");
console.log("EXERCICIO 04\n");

const cantoresUnicos = albuns.reduce((c, a) => {
    if (!c[a.cantor]) c[a.cantor] = 0;
    c[a.cantor]++;
    return c;
}, {});

console.log(Object.keys(cantoresUnicos));

/*Exercicio 05
Gere uma lista contendo a quantidade de álbuns que cada cantor possui
*/
console.log("---------------------");
console.log("EXERCICIO 05\n");

console.log(cantoresUnicos);

/*Exercicio bolinha
Substitua o nome do cantor da lista anterior pelo seu objeto
correspondente, presente na lista abaixo:
*/
console.log("---------------------");
console.log("EXERCICIO Bolinha\n");
const cantoresAgrupados = cantores.reduce((ca, c) => {
    ca[c.nome] = c;
    return ca;
}, {});

albuns.forEach(a => a.cantor = cantoresAgrupados[a.cantor]);
console.log(albuns);

/*Exercicio 06
Crie a função justDate que recebe uma data e retorna a mesma data, 
mas com os campos de tempo zerados
*/
console.log("---------------------");
console.log("EXERCICIO 06\n");

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

/*Exercicio 07
Crie as funções de comparação de datas: before e after. Adicione um 
parâmetro opcional inclusive com valor padrão false que permite 
considerar também a própria data.
*/
console.log("---------------------");
console.log("EXERCICIO 07\n");

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

/*Exercicio 08
Crie a função between que recebe uma data, uma data de inicio, outra 
de fim e uma terceira data. Teste se a data está no meio desse intervalo. 
Adicione um objeto desestruturado opcional no quarto parâmetro para 
permitir os parâmetros opcionais inclusiveStart e inclusiveEnd
*/
console.log("---------------------");
console.log("EXERCICIO 08\n");

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


/*Exercicio 09
Crie uma função que recebe uma data inicial, um número n e um 
intervalo de tempo. Ela deve retornar uma lista, contando as n próximas 
datas considerando esse intervalo de tempo.
*/
console.log("---------------------");
console.log("EXERCICIO 09\n");

function listInterval(date, n, interval){
    let list = [];
    for (let i = 0; i < n; i++) {
        list.push(new Date(date));
        date = interval(date);
    }
    return list;    
}
console.log(`listInterval:${listInterval(new Date(1960, 1, 1), 5, d => new Date(d.getFullYear(), d.getMonth() + 1, d.getDate() + 2))}`);

/*Exercicio 10
Crie uma lista de álbuns ordenada por ano. Não altere a lista original 
de álbuns.
*/
console.log("---------------------");
console.log("EXERCICIO 10\n");

const listaAlbunsOrd = [...albuns].sort((a, b) => a.ano - b.ano);
console.log(listaAlbunsOrd);

/*Exercicio 11
 Crie a função paginador que recebe uma lista e um tamanho de 
página. Ela deve retonar outra função que quando chamada com um 
número de página, retorne apenas os elementos daquela página
*/
console.log("---------------------");
console.log("EXERCICIO 11\n");

let pagina = paginador(albuns, 3);
console.log("pagina:"+JSON.stringify(pagina(1)));

function paginador(lista, tamanhoPagina = 10) {
    return function(nrPagina = 0) {
        const inicio = nrPagina * tamanhoPagina;
        const fim = (nrPagina+1) * tamanhoPagina;
        return lista.slice(inicio, fim);
    }
}

/*Exercicio 12
Crie a função media, que recebe uma lista e opcionalmente um nome de campo. 
    • Caso o nome de campo seja fornecido, calcule a média dos valores desse 
    campo
    • Caso não seja, faça a média utilizando os próprios elementos da lista
    • Exemplo: 
let avg = media(albuns, "nota");
let avg2 = media([1,2,3,4,5]);
*/
console.log("---------------------");
console.log("EXERCICIO 12\n");

let avg = media(albuns, "nota");
console.log(`avg:${avg}`);
let avg2 = media([1,2,3,4,5]);
console.log(`avg2:${avg2}`);
function media(lista, propriedade) {
    if (propriedade) {
        return lista.reduce((soma, item) => soma += item[propriedade], 0) / lista.length;
    }
    return lista.reduce((soma, item) => soma += item, 0) / lista.length;
}
console.log("\n---------------------");
