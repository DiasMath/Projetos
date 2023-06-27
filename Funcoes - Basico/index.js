startProgram();

function startProgram(){
    let name = "Dias";
    let age = 21;

    aniversario(name,age);
}

function aniversario(name, age){

    console.log("Parabens", name ,"pelos seus", age ,"anos!");

}


console.log("--------------------------------------------------");


let width;
let height;
let area;

/* function getArea(width, height){
    let result = width * height;
    return result;
}

width = window.prompt("Digite a largura:");
height = window.prompt("Digite a altura: ");

area = getArea(width, height);

console.log("A área é: ",area);
*/

// ### Arrow Functions ### //

// alternativa mais compacta para escrever uma funcao

/*const saudacao = function(nome){
    console.log(`saudacao ${nome}`);}
saudacao("bro");
*/

// com o Arrow

const saudacao = (nome) => console.log(`saudacao a voce, ${nome}`);
saudacao("bro");

console.log("------------------------");


let notas = [7, 10, 2, 6, 8, 3];

notas.sort((x, y) => y - x);
notas.forEach((element) => console.log(element));

console.log("----------------------------------------");

// Embaralhar um Array

let cartas = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function embaralha (array){
    
    let currentIndex = array.length;
    
        while(currentIndex !=0){
        
            let randomIndex = Math.floor(Math.random() * array.length);
        
            currentIndex -=1;
        
            let temp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temp;
    }
   
    return array;    
}

embaralha(cartas);
cartas.forEach(carta => console.log(carta));
    
console.log(cartas[0]);    

console.log("-------------------------------------------");

// ### Nested Function #### //

// Funcao dentro de funcao

let nome = "bro";
let email = 0;

function login(){

    function mostrarNome(){
        console.log(`Ola ${nome}`);
    }
    
    function mostrarEmail(){
        console.log(`voce tem ${email}`)
    }
    

mostrarNome();
mostrarEmail();

}

login();
