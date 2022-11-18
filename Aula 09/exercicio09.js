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

function criarCirculo(raio){
    return {
        raio,
        calc_area,
        calc_perimetro
    }
}
const circulo3 = criarCirculo(4);

console.log(circulo3.raio);
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
//6. Crie o atributo do raio. Torne-o privado.
//7. Adicione em sua classe um setter em que, caso o raio seja negativo, retire o sinal (um raio setado como -3 se tornaria 3)
//8. Adicione getters para o método raio e também para a área e o perímetro
//9. Sobreponha o método toString() da sua classe Circulo para imprimi-la como Circulo de raio ${raio}
//10. Crie um método estático criar que aceita uma lista como parâmetro e gera um círculo para cada número positivo em seu interior, ignore os parâmetros que não puderem ser convertidos para números.

class Circulo{
    #raio;
    constructor(raio = 0){
        this.#raio = raio;
    }
    get area(){
        return Math.PI * this.#raio * this.#raio;
    }
    set area(area){ 
        this.#raio = Math.sqrt(area/Math.PI);
    }
    get perimetro(){
        return 2 * Math.PI * this.#raio;
    }
    set perimetro(perimetro) {
        this.#raio = perimetro/(2*Math.PI);
    }
    get raio() {
        return this.#raio
    }
    set raio(raio) {
        this.#raio = Math.abs(raio);
    }
    toString(){
        return `Circulo de raio ${this.#raio}`;
    }
    static criar(...lista){
        return lista
            .filter((raio) => typeof raio == 'number' && raio > 0)
            .map(raio => new Circulo(raio));
    }
}
const circ5 = new Circulo(5);

console.log(`\nraio = ${circ5.raio}`);
console.log(circ5.area);
console.log(circ5.perimetro);
console.log(circ5.toString() + "\n");

const circulos = Circulo.criar(1,2,"eee",3,4,5);

circulos.forEach(c => console.log(c.toString()));





