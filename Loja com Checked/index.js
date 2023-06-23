// Declaração de variaveis
let nome;
let produto;

// Esconder o resumo do pedido
document.getElementById("resumoPedido").style.visibility = "hidden";

// Função que atribui a propriedade ao botão Refresh
function recarregarPagina(){
    window.location.reload();
}

// Função que mostra o resumo com os dados que o user preencheu
document.getElementById("botaoEnviar").onclick = function(){

    // Mostra o bloco de resumo
    document.getElementById("resumoPedido").style.visibility = "visible";

    // Atribuição dos valores dos inputs para as var 
    nome = document.getElementById("nomeCliente").value;
    produto = document.getElementById("nomeProduto").value;
    

    // Exibir o conteúdo na tela
    document.getElementById("resultadoNome").innerHTML = "Seu nome : " + nome;
    document.getElementById("resultadoProduto").innerHTML = "Produto escolhido : " + produto;

    // Seleção do tipo de pagamento
    if(visaBtn.checked){
        document.getElementById("resultadoPagamento").innerHTML = "Você pagará com Visa!";
    }
    else if(masterCardBtn.checked){
        document.getElementById("resultadoPagamento").innerHTML = "Você pagará com MasterCard!";
    }
    else if(payPalBtn.checked){
        document.getElementById("resultadoPagamento").innerHTML = "Você pagará com o PayPal!";
    }
    else{

        // Exibe um alerta e esconde o conteúdo
        alert("Selecione uma Forma de pagamento!");
        document.getElementById("resumoPedido").style.visibility = "hidden";
        
    }
}


























