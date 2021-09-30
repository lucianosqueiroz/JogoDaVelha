var player1 = 'X'
var player2 = 'O'
var quemJoga = 'player1'
var contaPosicaoLivre = 0
var contaPosicaoPreenchidos = 0

res = window.document.getElementsByName('player')
player.innerHTML = `<strong>${quemJoga}</strong>` //seta o primeiro jogador na div Player

function reiniciar() {
    window.location.reload() //recarrega a página para recomeçar o jogo
}

function verificaTabuleiroPreenchido() {//verifica quantas posições livre e preenchidas no tabuleiro
    var posicoes = document.getElementsByClassName("posicao") //cria um array de cada posição no tabuleiro do jogo
    contaPosicaoLivre = 0
    contaPosicaoPreenchidos = 0
    for (let i = 0; i< posicoes.length; i++) {
        if (posicoes[i].value =="_") {
            contaPosicaoLivre = contaPosicaoLivre +1
        } else {
            contaPosicaoPreenchidos = contaPosicaoPreenchidos + 1
            
        }
        
        if (contaPosicaoPreenchidos==9) {// caso todos os espaços forem preenchidos e não aja ganhador
            window.alert(`não houve vencedor \u{1F62A}\u{1F62A}\u{1F62A}	  `)
        }
    }
    
}

function jogar() {
    var posicoes = document.getElementsByClassName("posicao") //cria um array de cada posição no tabuleiro do jogo
    for (let i = 0; i< posicoes.length; i++) {
        posicoes[i].addEventListener("click", function() { //acrescenta um listem em cada posição do tabuleiro para aguardar um click

            if (this.value=="_" && quemJoga == 'player1') { //função executada na posição clicada
                
               
                this.value = 'X'
                verificaTabuleiroPreenchido()
                quemJoga = 'player2'
                verificaGanhador() //após a jogada, veririca se houveganhador
                player.innerHTML = `<strong>${quemJoga}</strong>`
                
            }
            else if(this.value=="_" && quemJoga == 'player2') {
                
                
                this.value = "O"
                verificaTabuleiroPreenchido()
                quemJoga = 'player1'
                verificaGanhador()  //após a jogada, veririca se houveganhador
                player.innerHTML = `<strong>${quemJoga}</strong>`
            } 

            
        })
    }
}

function  verificaGanhador() { //testa as possibilidades de vitórias
    if (//ganhador por linhas
        box11.value=='X' && box12.value=='X' && box13.value=='X' ||
        box21.value=='X' && box22.value=='X' && box23.value=='X'||
        box31.value=='X'&& box32.value=='X' && box33.value=='X'||
        //ganhador por colunas
        box11.value=='X' && box21.value=='X' && box31.value=='X' ||
        box12.value=='X' && box22.value=='X' && box32.value=='X'||
        box13.value=='X' && box23.value=='X' && box33.value=='X'||
        //ganhador diagonal
        box11.value=='X' && box22.value=='X' && box33.value=='X' ||
        box13.value=='X' && box22.value=='X' && box31.value=='X') {
        
        vencedor = 'player1'
        window.alert(`Vencedor ${vencedor} \u{1F600}\u{1F600}\u{1F600}`)//imprime ganhador
        reiniciar() //reinicia o jogo
    }
    else if(//ganhador por linhas

        box11.value=='O' && box12.value=='O' && box13.value=='O' ||
        box21.value=='O' && box22.value=='O' && box23.value=='O'||
        box31.value=='O' && box32.value=='O' && box33.value=='O'||
        //ganhador por colunas
        box11.value=='O' && box21.value=='O' && box31.value=='O' ||
        box12.value=='O' && box22.value=='O' && box32.value=='O'||
        box13.value=='O' && box23.value=='O' && box33.value=='O'||
        //ganhador diagonal
        box11.value=='O' && box22.value=='O' && box33.value=='O' ||
        box13.value=='O' && box22.value=='O' && box31.value=='O') {
        
        vencedor = 'player2'
        window.alert(`Vencedor ${vencedor} \u{1F600}\u{1F600}\u{1F600}`) //imprime o ganhador
        reiniciar()//reinicia o jogo
        
    }
    else{
        return;
    }
}