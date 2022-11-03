const canvas = document.getElementById("mycanvas"); canvas.width = 900; canvas.height = 600;
const ctx = canvas.getContext("2d"); ctx.style ="z-index: 0;"
document.addEventListener("mousemove", function(evento) {
    rect = canvas.getBoundingClientRect();
    x_mouse = evento.clientX - rect.left;
    y_mouse = evento.clientY - rect.top;
    var bola = new Image();
    bola.src = 'bola.png'; bola.style = "z-index: 1;"
    var bolax = x_mouse-canvas.width*0.015;
    var bolay = y_mouse-canvas.height*0.03;
    console.log("Largura: "+canvas.width+"\nAltura: "+ canvas.height);
    
    function ball1() {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(bola, bolax, bolay, canvas.width*0.03, canvas.height*0.06);
        ctx.fill();
        ctx.stroke();
    }
    if((bolax <= canvas.width-canvas.width*0.03) && (bolax >= 0) && (bolay <= canvas.height-canvas.height*0.06) && (bolay >= 0)){
        ball1();
        requestAnimationFrame(campo());
        requestAnimationFrame(ball1());
    }
})
let botao;
var cor_do_campo = "black";
function campo(){
    ball_();
    if(botao==1)grade();
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
campo();
function ball_(){
    ctx.beginPath();
    ctx.strokeStyle = cor_do_campo;
    ctx.arc(canvas.width/2, canvas.height/2, canvas.width*0.07, 0, canvas.width*0.05);
    ctx.stroke();

    ctx.fillStyle = cor_do_campo;
    ctx.beginPath();
    ctx.beginPath();
    ctx.arc(canvas.width/11, canvas.height/2, canvas.width*0.01, 0, 10);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = cor_do_campo;
    ctx.beginPath();
    ctx.beginPath();
    ctx.arc(canvas.width/1.1, canvas.height/2, canvas.width*0.01, 0, 10);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = cor_do_campo;
    ctx.beginPath();
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, canvas.width*0.01, 0, 10);
    ctx.fill();
    ctx.stroke();
}
function grade(){
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