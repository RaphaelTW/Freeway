//Código dos Carrinhos
let xCarrinhos = [600, 600, 600, 600, 600, 600];
let yCarrinhos = [40, 96, 150, 210, 270, 318];
let velocidadeCarrinhos = [2, 2.5, 4, 3.2, 5, 4.5];
let comprimentoCarrinho = 50;
let alturaCarrinho = 40;

function mostraCarrinho1() {
    for (let i = 0; i < imgCarrinhos.length; i++) {
        image(imgCarrinhos[i], xCarrinhos[i], yCarrinhos[i], comprimentoCarrinho, alturaCarrinho);
    }
}

function movimentoCarrinho() {
    for (let i = 0; i < imgCarrinhos.length; i++) {
        xCarrinhos[i] -= velocidadeCarrinhos[i];
    }
}

function voltaInicio() {
    for (let i = 0; i < imgCarrinhos.length; i++) {
        if (passouTela(xCarrinhos[i])) {
            xCarrinhos[i] = 600;
        }
    }
}

function passouTela(xCarrinhos) {
    return xCarrinhos < -50;
}