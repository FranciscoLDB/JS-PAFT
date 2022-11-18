let printCounter = 0;
const printPucpr = setInterval(() => {
    console.log('PUCPR');
    printCounter++;
    if (printCounter === 5) {
        clearInterval(printPucpr);
    }
},500);

setTimeout(() => {
    console.log("Pontificia Universidade")
    setTimeout(() => {
       console.log("Católica do")
       setTimeout(() => console.log("Paraná"), 2000);
    }, 500);
 }, 1000);

const delayedPrint = (text, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(text);
            resolve();
        }, delay)
    })
}
delayedPrint('Pontifícia Universidade', 1000)
    .then(() => delayedPrint('Católica do', 1000))
    .then(() => delayedPrint('Paraná', 1000));

let a = 0;
let b = 0;
let c = 0;
let contador = 0;

function realizaCalculo() {
    contador = contador + 1;
    if (contador === 3) {
        console.log(a + b * c);
    }
}

setTimeout(() => {
    a = 5;
    realizaCalculo();
}, 500);
setTimeout(() => {
    b = 10;
    realizaCalculo();
}, 200);
setTimeout(() => {
    c = 2;
    realizaCalculo();
}, 800);

function testNum(num) {
    return new Promise((resolve, reject) => {
       if (num > 10) {
          resolve(num);
       }  else {
          reject(num);
       }      
    });
 }
 
 testNum(10)
    .then(v => console.log(`Numero é maior que 10: ${v}`))
    .catch(v => console.log(`Numero não é maior que 10: ${v}`))

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

   function request(url, verbo='GET') {
    return new Promise((resolve, reject) => {
       var XMLHttpRequest = require('xhr2');

       const req = new XMLHttpRequest();
       req.open(verbo, url);
       req.onload = () => { 
          if (req.status >= 400 && req.status <= 599) {   //OK    
             reject({status: req.status, message: req.message});            
          } else {
             resolve(req.response);
          } 
       };
       req.error = () => { reject({status: null, message: "Network error."}) } 
       req.send();
    });   
 }
 
 request("https://jsonplaceholder.typicode.com/posts/")
   .then(JSON.parse)
   .then(data => data.forEach(({title}) => console.log(title)))
   .catch(console.error);