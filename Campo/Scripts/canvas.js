const canvas = document.getElementById("mycanvas"); canvas.width = 900; canvas.height = 600;
const ctx = canvas.getContext("2d"); ctx.style ="z-index: 0;"

let botao;
let cor_do_campo = "white";

const detalhamentos = () => {
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.strokeStyle = cor_do_campo;
    ctx.arc(canvas.width/2, canvas.height/2, canvas.width*0.07, 0, canvas.width*0.05);
    ctx.stroke();

    ctx.fillStyle = cor_do_campo;
    ctx.beginPath();
    ctx.beginPath();
    ctx.arc(canvas.width/(9/1), canvas.height/2, canvas.width*0.01, 0, 10);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = cor_do_campo;
    ctx.beginPath();
    ctx.beginPath();
    ctx.arc(canvas.width/(9/8), canvas.height/2, canvas.width*0.01, 0, 10);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = cor_do_campo;
    ctx.beginPath();
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, canvas.width*0.01, 0, 10);
    ctx.fill();
    ctx.stroke();
}

const gerarCampo = () => {

    if (botao == 1) gerarGrade();

    detalhamentos();

    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.strokeStyle = cor_do_campo;
    ctx.moveTo(canvas.width/2,0);
    ctx.lineTo(canvas.width/2, canvas.height);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(canvas.width/26, canvas.height/1.5);
    ctx.lineTo(canvas.width/26, canvas.height/3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width/26, canvas.height/1.5);
    ctx.lineTo(0, canvas.height/1.5);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(canvas.width/26, canvas.height/3);
    ctx.lineTo(0, canvas.height/3);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(canvas.width/1.04, canvas.height/1.5);
    ctx.lineTo(canvas.width/1.04, canvas.height/3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width/1.04, canvas.height/1.5);
    ctx.lineTo(canvas.width, canvas.height/1.5);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(canvas.width/1.04, canvas.height/3);
    ctx.lineTo(canvas.width, canvas.height/3);
    ctx.stroke();

}

const gerarGrade = () => {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(canvas.width/(9/1),0);
    ctx.lineTo(canvas.width/(9/1), canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(canvas.width/(9/2),0);
    ctx.lineTo(canvas.width/(9/2), canvas.height);
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.moveTo(canvas.width/(9/3),0);
    ctx.lineTo(canvas.width/(9/3), canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(canvas.width/(9/4),0);
    ctx.lineTo(canvas.width/(9/4), canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(canvas.width/(9/5),0);
    ctx.lineTo(canvas.width/(9/5), canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(canvas.width/(9/6),0);
    ctx.lineTo(canvas.width/(9/6), canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(canvas.width/(9/7),0);
    ctx.lineTo(canvas.width/(9/7), canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(canvas.width/(9/8),0);
    ctx.lineTo(canvas.width/(9/8), canvas.height);
    ctx.stroke();
    ///////////////////////////////////////////////
    ctx.beginPath();
    ctx.moveTo(canvas.width, canvas.height/(6/1));
    ctx.lineTo(0, canvas.height/(6/1));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvas.width, canvas.height/(6/2));
    ctx.lineTo(0, canvas.height/(6/2));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvas.width, canvas.height/(6/3));
    ctx.lineTo(0, canvas.height/(6/3));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvas.width, canvas.height/(6/4));
    ctx.lineTo(0, canvas.height/(6/4));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvas.width, canvas.height/(6/5));
    ctx.lineTo(0, canvas.height/(6/5));
    ctx.stroke();
}

export { gerarCampo , gerarGrade };