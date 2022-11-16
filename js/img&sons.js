//Imagens do Jogo
let imgEstrada;
let imgPersonagem;
let imgCarrinho1;
let imgCarrinho2;
let imgCarrinho3;

//Sons do Jogo
let somTrilha;
let somColisao;
let somPontos;

function preload() {
    imgEstrada = loadImage("img/estrada.png");
    imgPersonagem = loadImage("img/ator-1.png");
    imgCarrinho1 = loadImage("img/carro-1.png");
    imgCarrinho2 = loadImage("img/carro-2.png");
    imgCarrinho3 = loadImage("img/carro-3.png");
    imgCarrinhos = [imgCarrinho1, imgCarrinho2, imgCarrinho3, imgCarrinho1, imgCarrinho2, imgCarrinho3];

    somTrilha = loadSound("audio/trilha.mp3");
    somColisao = loadSound("audio/colidiu.mp3");
    somPontos = loadSound("audio/pontos.wav");
}

