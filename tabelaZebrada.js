/**
 *          COLOCANDO O FUNDO SILVER 
 */


window.onload = function(){ //executa a tarefa quando a janela for carregada
    var zebrar = document.querySelectorAll('.zebra tbody tr');
    for(var i = 0; zebrar.length; i+=2){ //+=2 pula uma linha sem o efeito de zebra
        zebrar[i].className = 'zebrada';

    }
}