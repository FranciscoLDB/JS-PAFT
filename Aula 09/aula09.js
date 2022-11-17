const obj = {
    nome: "Francisco",
    hello: function(texto){
        console.log(this.nome + " falou " + texto);
    }
};

const obj2 = {
    nome: "Chicao",
    hello: obj.hello
};

obj.hello("Olá");
obj2.hello("Oi")

String.prototype.grito = function () {
    return this.toUpperCase();
}


console.log('gol'.grito());

class Pet{
    constructor(nome = "", idade = 0){
        this.nome = nome;
        this.idade = idade;
    }
}
const Hera = new Pet("Hera", 6);
console.log(Hera.nome + " " + Hera.idade);

class Cat extends Pet{
    constructor(nome, idade, vidas = 7){
        super(nome, idade);
    }
    miar(){
        console.log(this.nome + " esta miando");
    }
}
const branco = new Cat("branco", 3);
branco.miar();

class Retangulo{
    _nomeP;
    
    constructor(priv){
        this.#nomeP = priv;
    }
    static area(x, y){
        return x*y;
    }
}
const quad = new Retangulo("quadrado");
console.log(quad.nomeP);
