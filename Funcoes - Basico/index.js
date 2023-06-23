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

function getArea(width, height){
    let result = width * height;
    return result;
}

width = window.prompt("Digite a largura:");
height = window.prompt("Digite a altura: ");

area = getArea(width, height);

console.log("A área é: ",area);










