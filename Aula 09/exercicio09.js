//1. Para praticar a sintaxe, experimente criar um objeto chamado Circulo com raio 3.

const Circulo1 = {
    raio: 3
}

//2. Em seguida, programe os métodos para calcular a área (PI*raio*raio) e o perímetro do círculo (2*PI*raio)
PI = 3.14;

function calc_area(){
    return (PI*this.raio*this.raio);
}
function calc_perimetro(){
    return (2*PI*this.raio);
}
Circulo1.calc_area = calc_area;
Circulo1.calc_perimetro = calc_perimetro;

console.log(Circulo1.calc_area());

//3. Altere seu objeto círculo para utilizar a sintaxe com uma função construtora chamada Circulo

Circulo1.Circulo = (raio) => { this.raio = raio; }
Circulo1.Circulo(4);
console.log(Circulo1.raio);
//4. Crie 2 círculos de raios diferentes. E imprima sua área e perímetro

const c1 = {
    raio: 2,
    area: calc_area,
    perimetro: calc_perimetro
}
const c2 = {
    raio: 4,
    area: calc_area,
    perimetro: calc_perimetro

}
console.log("c1: area = " + c1.area() + "    perimetro = " + c1.perimetro());
console.log("c2: area = " + c2.area() + "    perimetro = " + c2.perimetro());

//5. Refatore o seu código para o círculo utilizar a sintaxe de classes

class Circulo{
    raio;
    constructor(raio = 0){
        this.raio = raio;
    }
    get_area = calc_area();
    get_perimetro = calc_perimetro();
}

const circ5 = new Circulo(5);

//6. Crie o atributo do raio. Torne-o privado.
class CirculoPrivado{
    #raio;
    constructor(raio = 0){
        this.#raio = raio;
    }
}
const cp = new CirculoPrivado(3);

//7. Adicione em sua classe um setter em que, caso o raio seja negativo, retire o sinal (um raio setado como -3 se tornaria 3)

Circulo.prototype.set_raio = (raio) => {
    if(raio < 0){
        raio = raio*(-1);
    }
    this.raio = raio;
    console.log('raio == ' + raio + '  this.raio == ' + this.raio);
}
const circ11 = new Circulo();
circ11.set_raio(-1);
console.log('circ11 == ' + circ11.raio);


//8. Adicione getters para o método raio e também para a área e o perímetro

/*  CirculoPrivado.prototype.get_raio = () => { return this.#raio; }
    CirculoPrivado.prototype.get_area = () => { return (PI*this.#raio*this.#raio); }
    CirculoPrivado.prototype.get_perimetro = () => { return (2*PI*this.#raio); }    */

class CirculoPrivado8{
    #raio;
    constructor(raio = 0){
        this.#raio = raio;
    }
    get_raio(){ return this.#raio; }    
    get_area(){ return (PI*this.#raio*this.#raio); }
    get_perimetro(){ return (2*PI*this.#raio); }
}
const circ8 = new CirculoPrivado8(8);
console.log('circ8 raio = ' + circ8.get_raio() + '  area = ' + circ8.get_area() + '  perimetro = ' + circ8.get_perimetro());

//9. Sobreponha o método toString() da sua classe Circulo para imprimi-la como Circulo de raio ${raio}

Circulo.toString = () =>{
    console.log(`Circulo de raio ${this.raio}`);
}
const circ9 = new Circulo(9);

console.log(circ9);

//10. Crie um método estático criar que aceita uma lista como parâmetro e gera um círculo para cada número positivo em seu interior, ignore os parâmetros que não puderem ser convertidos para números.



