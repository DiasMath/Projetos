// ### OBJETO ### //

// um grupo de propriedades e metodos
// * Propriedades -> e o que um objeto tem
// * Metodo -> e o que um objeto pode fazer
// para acessar usar o '.'

const Carro = {

    modelo : "Fiat",
    cor: "Azul",
    ano: 2019,
    
    dirigir : function(){
        console.log(`voce esta dirigindo o ${this.modelo}`);
    },

    freiar : function(){
        console.log(`voce freiou o ${this.modelo} do ano ${this.ano}`);
    }
}

console.log(Carro.modelo);
console.log(Carro.cor);
console.log(Carro.ano);
Carro.dirigir();
Carro.freiar();

console.log("-----------------------------------------");


// ### THIS ### //

// se refere a um objeto em particular. Depende do contexto.
// se quiser acessar as prop do objeto precisa ter o This antes.

/* 

dirigir : function(){
    console.log(`voce esta dirigindo o ${this.modelo}`);
},

freiar : function(){
    console.log(`voce freiou o ${this.modelo} do ano ${this.ano}`);
}

*/

// ### CLASS ### //

// e um kit pronto para criar objetos. Todos os objetos que forem criados a partir da classe terao as mesmas propriedades

class Jogador {

    pontos = 0;

    pause(){
        console.log("jogo pausado");
    }
    sair(){
        console.log("saiu do jogo");
    }
}

const jogador1 = new Jogador(); 
const jogador2 = new Jogador();

jogador1.pontos += 10;

console.log(jogador1.pontos);

jogador1.pause();
jogador2.sair();

console.log("------------------------------------------------");

// ### CONSTRUCTOR ### //

// formulario para todos os objetos dentro de uma classe, no momento da criacao. 
// Pode adicionar props e metodos fora do constructor.

class Aluno {

    constructor(nome,idade,media){
        this.nome = nome;
        this.idade = idade;
        this.media = media;
    }

estudo(){
    console.log("voce esta estudando");
    } 
}

const aluno1 = new Aluno("Silva", 18, 7.5);
const aluno2 = new Aluno("Carlos", 22,5.0);

console.log(aluno1.nome);
console.log(aluno1.idade);
console.log(aluno1.media);
aluno1.estudo();

console.log("-------------------------------------------------");

// ### STATIC ### //

// algo que e estatico pertence a classe e nao ao objeto.
// Prop e metodos pertencem a classe.

class Mercado {

    static numeroCompras = 0;

        constructor(frutas){
            this.frutas = frutas
            Mercado.numeroCompras += 1;
        }

    static pegar(){
        console.log("pegou uma fruta");
    }
}

const fruta1 = new Mercado("Uva");
const fruta2 = new Mercado("Banana");
const fruta3 = new Mercado("Manga");

Mercado.pegar();

console.log(Mercado.numeroCompras);


console.log("-----------------------------------------------");


// ### HERANCA ### //

// um classe filho herda os metodos e propriedades de uma classe pai

class Animal {

    vivo = true;
    comer(){
        console.log(`o animal ${this.name} esta comendo`);
    }
}

class coelho extends Animal {

    name = "Coelho";
    pular(){
        console.log(`o ${this.name} esta pulando`);
    }
}

class peixe extends Animal {

    name = "Peixe";
    nadar(){
        console.log(`o ${this.name} esta nadando`);
    }
}

class falcao extends Animal {

    name = "Falcao";
    voar(){
        console.log(`o ${this.name} esta voando`);
    }
}

const coelho1 = new coelho;
const peixe1 = new peixe;
const falcao1 = new falcao;

console.log(coelho.name);
console.log(peixe1.name);
console.log(falcao1.name);

console.log(coelho1.vivo);
peixe1.comer();
falcao1.voar();

console.log("-----------------------------------------------");


// ### SUPER ### //

// se refere a classe pai. Usado para invocar o constructor da classe pai

class Animal1 {

    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;

    }
}

class Peixe extends Animal1 {

    constructor(name,idade,velocidade){
        super(name,idade);
        this.velocidade = velocidade;
    }
}

const peixe01 = new Peixe("beta", 2, 100);

console.log(peixe01.nome);
console.log(peixe01.idade);
console.log(peixe01.velocidade);

console.log("-----------------------------------------------");


// ### GET e SET ### //

// get - prop para a funcao quando a funcao e acessada.
// set - prop para a funcao quando e atribuido um valor para a prop.

class Navio {

    constructor(potencia){
        this._potencia = potencia;
        this._gas = 250;
    }
    get potencia(){
        return `${this._potencia} de potencia`;
    }

    get gas(){
        return `${this._gas}L (${this._gas / 500 * 100})%`;
    }

    set gas(value){
        if(value>500){
            value = 500;
        }
        else if(value<0){
            value = 0;
        }
    
    this._gas = value;

    }
}

let navio = new Navio(300);
console.log(navio.potencia);

navio.gas = 250;
console.log(navio.gas);


console.log("-----------------------------------------------");


// ### OBJETOS COMO ARGS ### //

class Aviao {

    constructor(modelo,ano,cor){
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
}

let aviao = new Aviao("Boeing",1980,"Vinho");

function mudarCor(aviao,cor){
    aviao.cor = cor;
}

mudarCor(aviao,"preto");

function mostrarAviao(nickAviao){
    console.log(nickAviao.modelo);
    console.log(nickAviao.ano);
    console.log(nickAviao.cor);
}

mostrarAviao(aviao);


console.log("-----------------------------------------------");


// ### ARRAY DE OBJETO ### //

class Moto {

    constructor(modelo,ano,cor){
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    Dirigir(){
        console.log(`voce esta dirigindo ${this.modelo}`)
    }
}

const moto1 = new Moto("Fazer",2021,"Vermelho");
const moto2 = new Moto("Ninja",2019,"Preto");
const moto3 = new Moto("LXW",2024,"Azul");
const moto4 = new Moto("XJ",2015,"Roxo");

const Motos = [moto1, moto2, moto3, moto4];

console.log(Motos[0].modelo);
Motos[1].Dirigir();

function corrida(){
    for(const moto of Motos){
        console.log(moto.cor);
        moto.Dirigir();
    }
}

corrida(Motos);
















