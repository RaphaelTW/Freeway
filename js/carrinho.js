//Código dos Carrinhos

//Carrinho 1
let xCarrinho1 = 600;
let yCarrinho1 = 40;
let velocidadeCarrinho1 = 2;

//Carrinho 2
let xCarrinho2 = 600;
let yCarrinho2 = 96;
let velocidadeCarrinho2 = 2.5;

//Carrinho 2
let xCarrinho3 = 600;
let yCarrinho3 = 150;
let velocidadeCarrinho3 = 4;

function mostraCarrinho1(){
    image(imgCarrinho1, xCarrinho1, yCarrinho1, 50, 40);
    image(imgCarrinho2, xCarrinho2, yCarrinho2, 50, 40);
    image(imgCarrinho3, xCarrinho3, yCarrinho3, 50, 40);
}

function movimentoCarrinho() {
    xCarrinho1 -= velocidadeCarrinho1;
    xCarrinho2 -= velocidadeCarrinho2;
    xCarrinho3 -= velocidadeCarrinho3;
}

function voltaInicio() {
    if (xCarrinho < -30){
        xCarrinho1 = 600;
    }
}