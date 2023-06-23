let simbolo = window.prompt("Digite o simbolo desejado: ");
let colunas = window.prompt("Digite a qtd de colunas:");
let linhas = window.prompt("Digite a qtd de linhas:");

for(let i = 1; i <= linhas; i+= 1){
    
    for(let j = 1; j <= colunas; j+= 1){

        document.getElementById("quadrilatero").innerHTML += simbolo;
    }
    document.getElementById("quadrilatero").innerHTML += "<br>";
}   


