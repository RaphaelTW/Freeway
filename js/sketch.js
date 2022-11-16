function setup() {
    createCanvas(500, 400);
    somTrilha.loop();
}

function draw() {
    background(imgEstrada);
    mostraPersonagem();
    mostraCarrinho1();
    movimentoCarrinho();
    movimentoPersonagem();
    voltaInicio();
    colisaoPersonagem();
    incluirPontos();
    marcaPontos();
}