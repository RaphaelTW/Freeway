//Código do Personagem
let xPersonagem = 100;
let yPersonagem = 366;

//Código que exibe o Personagem
function mostraPersonagem(){
    //imagem da Vaquinha altura X, Y. Tamanho 30 x 30
    image(imgPersonagem, xPersonagem, yPersonagem, 30, 30);
}

//Código que movimenta o personagem
function movimentoPersonagem() {
    if (keyIsDown(UP_ARROW)){
        yPersonagem -=3;
    }
    if (keyIsDown(DOWN_ARROW)){
        yPersonagem +=3;
    }
}