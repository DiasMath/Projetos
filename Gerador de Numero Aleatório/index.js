const resposta = Math.floor(Math.random() * 10 + 1);

let chance = 0;

document.getElementById("submitBtn").onclick = function(){

let palpite = document.getElementById("palpite").value;
chance+=1;

if(palpite == resposta){
    alert(`${resposta} eh o numero correto. Precisou de ${chance} chances.`)
}
else if(palpite > resposta){
    alert("Muito grande");
}
else{
    alert("Muito pequeno");
    }
}