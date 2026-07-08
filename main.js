const botoes = document.querySelectorall("button")
console.log(botoes)

botoes.forEach(function(botao){
    let curtiu = false
    botao.addEventlistener("click", botaoClicado)

    function botaoClicado(){
        console.log("botao Clicado")
        let texto = botao.querySelector("span")
        if(curtiu == false) {
            texto.texContent++;
        }else{
            texto.texContent--;
            curtiu = false
        }
    }
}
