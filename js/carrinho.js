//Código dos Carrinhos
let xCarrinhos = [600, 600, 600];
let yCarrinhos = [40, 96, 150];
let velocidadeCarrinhos = [2, 2.5, 4];

function mostraCarrinho1(){
    for (let i = 0; i < imgCarrinhos.length; i = i + 1){
        image(imgCarrinhos[i], xCarrinhos[i], yCarrinhos[i], 50, 40);
    }
}

function movimentoCarrinho(){
    for (let i = 0; i < imgCarrinhos.length; i = i +1){
        xCarrinhos[i] -= velocidadeCarrinhos[i];
    }
}

function voltaInicio(){
    for (let i = 0; i < imgCarrinhos.length; i = i +1){
        if (passouTela(xCarrinhos[i])){
            xCarrinhos[i] = 600;
        }
    }
}

function passouTela(xCarrinhos){
    return xCarrinhos < -50;
}













