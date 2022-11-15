//Código do Personagem
let xPersonagem = 100;
let yPersonagem = 366;
let colisao = false;

//Código que exibe o Personagem
function mostraPersonagem() {
    //imagem da Vaquinha altura X, Y. Tamanho 30 x 30
    image(imgPersonagem, xPersonagem, yPersonagem, 30, 30);
}

//Código que movimenta o personagem
function movimentoPersonagem() {
    if (keyIsDown(UP_ARROW)) {
        yPersonagem -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yPersonagem += 3;
    }
}

function colisaoPersonagem() {
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imgCarrinhos.length; i++) {
        colisao = collideRectCircle(xCarrinhos[i], yCarrinhos[i], comprimentoCarrinho, alturaCarrinho, xPersonagem, yPersonagem, 15);
        if (colisao) {
            colidiu();
        }
    }
}

function colidiu() {
    yPersonagem = 366;
}