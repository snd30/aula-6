//criando variaveis e obetendo elementos
let contador = 0
let txtcontador = document.getElementById('txtcontador')
let txtmensagem = document.getElementById('txtmensagem')

//função aumentar 
function aumentar(){
   contador = contador + 1 
   //contador++
   txtcontador.innerHTML = contador
   exibirmensagem()
}

//função diminuir
function diminuir(){
    contador = contador - 1  
    //contador--
    txtcontador.innerHTML = contador
    exibirmensagem()
}
function maisd(){
    contador = contador + 2
    txtcontador.innerHTML = contador
    exibirmensagem()
}
function menosd(){
    contador = contador - 2
    txtcontador.innerHTML = contador
    exibirmensagem()
}
function zerar(){
    contador = 0
    txtcontador.innerHTML = contador
    exibirmensagem()
}

//função mensagem
function exibirmensagem(){
    if(contador < 20){
        txtmensagem.innerHTML = "Pode entrar!"
     if (contador > 15) {
        txtmensagem.innerHTML = "Quase lotado"
     } else {
        
     }   
    } else{
        txtmensagem.innerHTML = 'Lotado!'
    }
}
