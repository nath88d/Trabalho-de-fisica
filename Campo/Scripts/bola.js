// Variaveis
let bola = new Image();
let tamanhoBola = 20;

bola.src = "../Imagens/bola.png";

const posicionarBola = (ctx, x, y) => {
    ctx.drawImage(bola, x, y, tamanhoBola, tamanhoBola);
    ctx.fill();
    ctx.stroke();
}

export { posicionarBola, tamanhoBola }

