//Código dos Carrinhos
let xCarrinhos = [600, 600, 600];
let yCarrinhos = [40, 96, 150];
let velocidadeCarrinhos = [2, 2.5, 4];

function mostraCarrinho1(){
    for (let i = 0; i < imgCarrinhos.length; i = i + 1){
        image(imgCarrinhos[i], xCarrinhos[i], yCarrinhos[i], 50, 40);
    }
}

function movimentoCarrinho() {
    xCarrinhos[0] -= velocidadeCarrinhos[0];
    xCarrinhos[1] -= velocidadeCarrinhos[1];
    xCarrinhos[2] -= velocidadeCarrinhos[2];
}

function voltaInicio() {
    if (xCarrinhos[0] < -50){
        xCarrinhos[0] = 600;
    }
    if (xCarrinhos[1] < -50){
        xCarrinhos[1] = 600;
    }
    if (xCarrinhos[2] < -50){
        xCarrinhos[2] = 600;
    }
}