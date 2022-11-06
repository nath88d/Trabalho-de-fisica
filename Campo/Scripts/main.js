// Módulos
import { gerarCampo, gerarGrade } from "./canvas.js";
import { lerArquivo } from "./arquivo.js";
import { tamanhoBola, posicionarBola } from "./bola.js";
import { tamanhoRobo, posicionarRobo } from "./robo.js";
import { desenharVetor } from "./vetor.js";

// Variáveis
let gradeAtiva = false;
let steps = 0;
let arquivo;

let velocidadeRoboMaxima = 28 * 0.04;

let bolaFoiInterceptada = false;
let reiniciarAnimacao = false;
let raioDeInterceptacao = (tamanhoBola / 2) + (tamanhoRobo / 2)
let mostrarVetores = true;

let animacaoRotacao = 0;

let bolaValues = {
    x: 0,
    y: 0,
    antigoX: 0,
    antigoY: 0,
    velRelativaX: 0,
    velRelativaY: 0, 
}

let roboValues = {
    x: 250,
    y: 350,
    
    velRelativaX: 0,
    velRelativaY: 0,

    aceleracaoX: 0,
    aceleracaoY: 0,
}

let gol = {
    x: tamanhoBola,
    y: 300 - (tamanhoRobo / 2)
}

let interceptacao;

// HTML
const canvas = document.getElementById("mycanvas")
const ctx = canvas.getContext("2d")

const iniciarAnimacao = document.getElementById("iniciar-animacao")
const pararAnimacao = document.getElementById("parar-animacao")
const uploadArquivo = document.getElementById("inserir-arquivo")

const posicaoxRobo = document.getElementById("posicaox-robo")
const posicaoyRobo = document.getElementById("posicaoy-robo")

// Funções Principais
const ligarGrade = () => gradeAtiva = true;
const desligarGrade = () => gradeAtiva = false;

const distanciaEntreDoisPontos = (x1, y1, x2, y2) => {
    return Math.sqrt( (x1 - x2)**2 + (y1 - y2)**2 )
}

const interpretarArquivo = (event) => {
    lerArquivo(event)
    .then(res => {
        arquivo = res
        arquivo.forEach((element, index, array) => {
            arquivo[index]["x"] = arquivo[index]["x"] * 100;
            arquivo[index]["y"] = 600 - (arquivo[index]["y"] * 100);
        })
    })
}

const estaContidoNoCampo = (x, y) => {
    if (x < 0 || x > 900) return false;
    if (y < 0 || y > 600) return false;
    return true;
}

const encontrarPontoInterceptacao = () => {
    
    let chosen;
    let chosenDistancia = 99999;

    arquivo.forEach( (element, index) => {
        let distancia = distanciaEntreDoisPontos(element.x, element.y, roboValues.x, roboValues.y)
        let tempo = Math.ceil(distancia / (velocidadeRoboMaxima))

        if (!chosen && distancia < chosenDistancia && tempo < index && estaContidoNoCampo(element.x - (tamanhoRobo/2), element.y - (tamanhoRobo/2))) {
            console.log(distancia, tempo, index, element.x, element.y)
            chosen = element
            chosenDistancia = distancia
            console.log(element)
        }
    })

    if (chosen) {
        chosen.x -= (tamanhoRobo/2)
        chosen.y -= (tamanhoRobo/2)
    }

    return chosen || false;

}

const main = (debug) => {

    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Gera o campo
    gerarCampo()

    // Posiciona a bola
    bolaValues.x = ((arquivo[steps]["x"]) - (tamanhoBola/2));
    bolaValues.y = (((arquivo[steps]["y"])) - (tamanhoBola));

    bolaValues.velRelativaX = bolaValues.x - bolaValues.antigoX
    bolaValues.velRelativaY = bolaValues.y - bolaValues.antigoY 

    bolaValues.antigoX = bolaValues.x
    bolaValues.antigoY = bolaValues.y

    // Calcula velocidade angular do robô até ponto de interceptação
    let magnitudeInterceptacao = Math.sqrt( interceptacao.x**2 + interceptacao.y**2 )
    let magnitudeRobo = Math.sqrt( roboValues.x**2 + roboValues.y**2 )
    let magnitudeGol = Math.sqrt(300**2)
    let magnitudeBola = Math.sqrt(bolaValues.x**2 + bolaValues.y**2)
    let anguloRelativo = Math.atan2(magnitudeInterceptacao, magnitudeRobo)
    let anguloRelativoGol = Math.atan2(magnitudeGol, magnitudeBola)

    // Caso ocorrer uma interceptação, guie a bola até o gol
    if (bolaFoiInterceptada) {
        
        // Para animação da rotação
        animacaoRotacao += 0.01
        if (animacaoRotacao >= 1) {
            animacaoRotacao = 1 
        }

        // Novo objetivo do robo, ir até o gol
        interceptacao.x = gol.x
        interceptacao.y = gol.y

        // Bola acompanha o robo
        bolaValues.x =  roboValues.x - (((raioDeInterceptacao * Math.cos(anguloRelativoGol))) * animacaoRotacao ) + (tamanhoRobo / 2)
        bolaValues.y =  roboValues.y + (((raioDeInterceptacao * Math.sin(anguloRelativoGol))) * animacaoRotacao ) + (tamanhoRobo / 2)

        bolaValues.velRelativaX = 0
        bolaValues.velRelativaY = 0

    }

    // Rounding
    if (Math.abs(interceptacao.x - roboValues.x) < 2) {
        roboValues.x = interceptacao.x
        roboValues.velRelativaX = 0
    }

    if (Math.abs(interceptacao.y - roboValues.y) < 2) {
        roboValues.y = interceptacao.y
        roboValues.velRelativaY = 0
    }

    if (interceptacao.x < roboValues.x) {
        roboValues.aceleracaoX -= 0.05
        roboValues.velRelativaX = -(velocidadeRoboMaxima * Math.sin(anguloRelativo))
    } else if (interceptacao.x > roboValues.x) {
        roboValues.aceleracaoX += 0.05
        roboValues.velRelativaX = (velocidadeRoboMaxima * Math.sin(anguloRelativo))
    }

    if (roboValues.aceleracaoX > 1) {
        roboValues.aceleracaoX = 1
    } else if (roboValues.aceleracaoX < -1) {
        roboValues.aceleracaoX = -1
    }

    roboValues.x += (velocidadeRoboMaxima * Math.sin(anguloRelativo)) * roboValues.aceleracaoX
    
    if (interceptacao.y < roboValues.y) {
        roboValues.aceleracaoY -= 0.05
        roboValues.velRelativaY = -(velocidadeRoboMaxima * Math.cos(anguloRelativo))
    } else if (interceptacao.y > roboValues.y) {
        roboValues.aceleracaoY += 0.05
        roboValues.velRelativaY = (velocidadeRoboMaxima * Math.cos(anguloRelativo))
    } 

    roboValues.y += (velocidadeRoboMaxima * Math.sin(anguloRelativo)) * roboValues.aceleracaoY

    if (roboValues.aceleracaoY > 1) {
        roboValues.aceleracaoY = 1
    } else if (roboValues.aceleracaoY < -1) {
        roboValues.aceleracaoY = -1
    }

    posicionarRobo(ctx, roboValues.x, roboValues.y)
    posicionarBola(ctx, bolaValues.x, bolaValues.y)

    // Desenha vetores na bola e no robo
    if (mostrarVetores) {

        // Vetores do robo
        // Vetores Diretores
        desenharVetor(ctx, roboValues.x + (tamanhoRobo/2), roboValues.y + (tamanhoRobo/2), ((roboValues.x + (tamanhoRobo/2)) + (roboValues.velRelativaX * 250)), roboValues.y + (tamanhoRobo/2), "#B22222")
        desenharVetor(ctx, roboValues.x + (tamanhoRobo/2), roboValues.y + (tamanhoRobo/2), roboValues.x + (tamanhoRobo/2), ((roboValues.y + (tamanhoRobo/2)) + (roboValues.velRelativaY * 250)), "#00CED1")

        // Vetor Velocidade
        desenharVetor(ctx, roboValues.x + (tamanhoRobo/2), roboValues.y + (tamanhoRobo/2), ((roboValues.x + (tamanhoRobo/2)) + (roboValues.velRelativaX * 250)), ((roboValues.y + (tamanhoRobo/2)) + (roboValues.velRelativaY * 250)), "#FAC800")

        // Vetores da bola
        // Vetores Diretores
        desenharVetor(ctx, bolaValues.x + (tamanhoBola/2), bolaValues.y + (tamanhoBola/2), ((bolaValues.x + (tamanhoBola/2)) + (bolaValues.velRelativaX * 25)), bolaValues.y + (tamanhoBola/2), "#B22222")
        desenharVetor(ctx, bolaValues.x + (tamanhoBola/2), bolaValues.y + (tamanhoBola/2), bolaValues.x + (tamanhoBola/2), ((bolaValues.y + (tamanhoBola/2)) + (bolaValues.velRelativaY * 25)), "#00CED1")

        // Vetor Velocidade
        desenharVetor(ctx, bolaValues.x + (tamanhoBola/2), bolaValues.y + (tamanhoBola/2), ((bolaValues.x + (tamanhoBola/2)) + (bolaValues.velRelativaX * 25)), ((bolaValues.y + (tamanhoBola/2)) + (bolaValues.velRelativaY * 25)), "#FAC800")

    }

    if (distanciaEntreDoisPontos(roboValues.x, roboValues.y, bolaValues.x, bolaValues.y) < raioDeInterceptacao && !bolaFoiInterceptada) {
        bolaFoiInterceptada = true
    }

    if (!debug && !reiniciarAnimacao) {
        reiniciarAnimacao = false
        if (steps < 1000) setTimeout( main, 20 );
        // Incrementa o tempo
        steps++;  
    }

    reiniciarAnimacao = false
     
}

// Inicialização
gerarCampo();

// Conectores
uploadArquivo.addEventListener("change", interpretarArquivo)
iniciarAnimacao.addEventListener("click", () => { 
    roboValues.x = parseInt(posicaoxRobo.value) || 250; 
    roboValues.y = parseInt(posicaoyRobo.value) || 250; 
    roboValues.aceleracaoX = 0;
    roboValues.aceleracaoY = 0;
    interceptacao = encontrarPontoInterceptacao()
    if (!interceptacao) {
        alert("Não existe ponto de interceptação")
        return 
    };
    steps = 0; 
    main()
})

pararAnimacao.addEventListener("click", () => {
    steps = 0;
    reiniciarAnimacao = true; 
    bolaFoiInterceptada = false;
    setTimeout( () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        gerarCampo()} , 40 
    )
})
