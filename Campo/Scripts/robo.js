// Variaveis
let robo = new Image();
let tamanhoRobo = 50;

robo.src = "../Imagens/robo.png";

const posicionarRobo = (ctx, x, y) => {
    ctx.drawImage(robo, x, y, tamanhoRobo, tamanhoRobo);
    ctx.fill();
    ctx.stroke();
}

export { posicionarRobo, tamanhoRobo }

