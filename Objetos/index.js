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
