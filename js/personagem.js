//Código do Personagem
let xPersonagem = 85;
let yPersonagem = 366;
let colisao = false;
let pontos = 0;

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
        if (limiteBaixo())
            yPersonagem += 3;
    }
}

function colisaoPersonagem() {
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imgCarrinhos.length; i++) {
        colisao = collideRectCircle(xCarrinhos[i], yCarrinhos[i], comprimentoCarrinho, alturaCarrinho, xPersonagem, yPersonagem, 15);
        if (colisao) {
            colidiu();
            somColisao.play();
            if (pontosMaiorQueZero()) {
                pontos -= 1;
            }
        }
    }
}

function colidiu() {
    yPersonagem = 366;
}

function incluirPontos() {
    textAlign(CENTER);
    textSize(30);
    fill(color(226, 252, 0));
    text(pontos, width / 5, 28);
}

function marcaPontos() {
    if (yPersonagem < 15) {
        pontos += 1;
        somPontos.play();
        colidiu();
    }
}

function pontosMaiorQueZero() {
    return pontos > 0
}

function limiteBaixo() {
    return yPersonagem < 366;
}