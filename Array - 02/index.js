//Rest (...)
//representa um numero de parametros indefinido
//junta os paramentros em um array

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

function soma(...numeros){
    let total = 0;
    for( numero of numeros){
        total+=numero;
    }
    return total;
}

console.log(soma(a,b,c,e));



console.log("------------------------");


//### CALLBACK ### //


// Funcao que serve de parametro para outras funcoes

function sum(x, y, callBack){
    let result = x + y;
    callBack(result);
}

function mostrarConsole(output){
    console.log(output);
}

function mostrarDOM(output){
    document.getElementById("label").innerHTML = output;
}

sum(50, 10, mostrarConsole);

console.log("------------------------");

//### .forEach() ### //


//executa uma funcao callback para cada elemento do array

let alunos = ["joao", "antonio", "carlos"];

function caps(element,index,array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element);
}

alunos.forEach(caps);
alunos.forEach(print);

console.log("---------------------------------");


// ### Array.map() ### //


// executa um callback para cada elemento do array e cria um novo array

let numeros = [1, 2, 3, 4, 5];

let quadrados = numeros.map(quadrado);

function quadrado(element){
    return Math.pow(element, 2);
}

function print(element){
    console.log(element);
}

quadrados.forEach(print);

console.log("---------------------------------");

// ### Array.filter() ### //


//cria um novo array com os elementos que passaram por um teste feito por uma funcao

let idades = [18, 20, 15, 23, 45, 39, 10];

let adultos = idades.filter(checarIdade);

function checarIdade(element){
    return element >= 18; 
}

function print(element){
    console.log(element);
}

adultos.forEach(print);


console.log("--------------------------");


// ### Array.reduce() ### //


//reduz um array para um unico valor. Usado em carrinho de compras.

let precos = [100, 50, 20, 75, 40, 10,85];

let total = precos.reduce(carrinho);

function carrinho(total, element){
    return total + element;
}

console.log(`O total e: ${total} reais`);


console.log("--------------------------");


// ### Sort para Array numerico ### //


// usando o .sort() para colocar na ordem crescente(x-y) ou decrescente(y-x)

let notas = [10, 5, 6, 7, 4, 8];

function crescente(x, y){
    return x - y;
}

function decrescente(x, y){
    return y - x;
}

function print(element){
    console.log(element);
}

notas.sort(decrescente);
notas.forEach(print);

















