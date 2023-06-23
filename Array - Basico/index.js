// ### OPERACOES BASICAS COM ARRAY ## //


// criar uma array.
let notas = [5, 7, 3, 10, 9, 6];

// chamar a array.
console.log(notas);

//chamar um elemento em especifico.
console.log(notas[2]);

// alterar um elemento.
notas[4] = 8;
console.log(notas);

//adicionar elemento no final.
notas.push(2);
console.log(notas);

//retirar um elemento do final.
notas.pop();
console.log(notas);

//adicionar elemtento ao inicio.
notas.unshift(4);
console.log(notas);

//retirar elemento do inicio.
notas.shift();
console.log(notas);

//ver tamanho do array.
let length = notas.length;
console.log(length);

//descobrir o index.
let index = notas.indexOf(10);
console.log(index);


// ### LOOPS COM ARRAYS ### //


//loops atraves do array.

//forma 1

let precos = [100, 75, 20, 60, 50, 35];

   for(let i=0;i<precos.length;i+=1){
        console.log(precos[i]);
   }

//forma 1 - descendente
   for(let i = precos.length -1;i>=0;i-=1){
        console.log(precos[i]);
   }

//forma 2 simplificada
for(let preco of precos){
    console.log(preco);
}

console.log("-------------");

// ### ORDENAR O ARRAY ### //


let alunos = ["Marcio", "Rodrigo", "Carlos", "Antonio", "Lucas", "Fabricio"]

console.log(alunos);

// usando o sort();.
alunos.sort();
console.log(alunos);

// Descendente usando o .reverse().
alunos.sort().reverse();
console.log(alunos);

//cada elemento eh um registro no console.
for( let aluno of alunos){
    console.log(aluno);
}

console.log("-------------------");


// ### 2D ARRAY ### //


//usado para Grid de array.
let frutas = ["banana", "maca", "Goiaba", "Manga"];
let verduras = ["Cebola", "Batata", "Beterraba"];
let proteina = ["Carne", "Peixe", "Frango", "Ovo", "Soja"];

let mercado = [frutas, verduras, proteina];

//usa matriz[i][j] para alterar um elemento.

mercado[0][3] = "Uva";

console.log(frutas);

mercado[1][2] = "Aipim";

console.log(verduras);

//Loops para percorrer a lista

//1 loop) mostra os 3 arrays separados com os seus elementos.
    for(let compras of mercado){
        console.log(compras);
    }

//2 loop aninhado com o primeiro) mostra todos os elementos do array sem separacao.
    for(compras of mercado){
        for(almoco of compras){
            console.log(almoco);
        }
    }


// ### SPREAD OPERATOR (...) ### //


//serve para separar os elementos de um array.
let numeros = [1, 2, 3, 4, 5, 6];

//separa cada elemento. Se fosse sem, ira computar como String.
let maximo = Math.max(...numeros);
console.log(maximo);

//adicionar elementos de uma array em outra array.
let turmaA = ["Marcio", "Rodrigo", "Carlos"];
let turmaB = ["Maria", "Juvenilda", "Creusa"];

turmaA.push(...turmaB);
console.log(turmaA); //se nao usar o (...) vai imprimir o array no console.

console.log(...turmaA); //se usar, imprimira os elementos em um so registro no console.

console.log("-------------------------------");

//let frutas = ["banana", "maca", "Goiaba", "Uva"];
//let verduras = ["Cebola", "Batata", "Aipim"];
//let proteina = ["Carne", "Peixe", "Frango", "Ovo", "Soja"];
//let mercado = [frutas, verduras, proteina];

let indexFrango = mercado[2].indexOf("Frango");
console.log(indexFrango);

let indexUva = mercado[0].indexOf("Uva");
console.log(indexUva);

mercado.sort();

for(let compras of mercado){
    for(let almoco of compras){
        console.log(almoco);
    }
}

console.log("-------------------");


let comida = [];

comida.push(...frutas,...verduras,...proteina);
console.log(...comida);

let tamanho = comida.length;

console.log(tamanho);

console.log("-------------------");

let contas = [100, 150.23, 176.29, 500, 350, 72.50, 250];

let comprimento = contas.length;
console.log("O comprimento e: " + comprimento);

console.log("Loop normal: ");

for(let i=0; i< contas.length; i+=1){
    console.log(i);
}

console.log("Loop Descendente: ");

for(let i= contas.length -1; i>=0; i-=1){
    console.log(i);
}

console.log("acabou");

console.log("forma simplificada");

for(let conta of contas){
    console.log(conta);
}

console.log("Loop Descendente: ");

for(let conta of contas.reverse()){
    console.log(conta);
}

console.log("-------------------");

let teste = [2, 5, 6, 3, 8, 1];

for(let print of teste){
    console.log(print);
}

console.log("-------------------");

for(let print of teste.reverse()){
    console.log(print);
}

console.log("-------------------");

//para organizar do maior pro menor 

//let teste = [2, 5, 6, 3, 8, 1];

//criar um array de copia usando o spread pois o sort modifica o array original.
let copiaTeste = [...teste];
console.log(copiaTeste);

//funcao de comparacao para ordenar do maior pro menor: (a,b) => (b - a)
//se b - a der positivo, bota o b antes do a.
for(let print of teste.sort((a,b) => (b - a))){
    console.log(print);
}

console.log("-------------------");

//se a - b der positivo bota o b antes do a
for(let print of teste.sort((a,b)=> (a - b))){
    console.log(print);
}