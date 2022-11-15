function setup() {
    createCanvas(500, 400);
}

function draw() {
    background(imgEstrada);
    mostraPersonagem();
    mostraCarrinho1();
    movimentoCarrinho();
    movimentoPersonagem();
    voltaInicio();
}