const canvas = document.getElementById("mycanvas"); canvas.width = screen.width/2; canvas.height = screen.height/2;
const ctx = canvas.getContext("2d");
document.addEventListener("mousemove", function(evento) {
    rect = canvas.getBoundingClientRect();
    x_mouse = evento.clientX - rect.left;
    y_mouse = evento.clientY - rect.top;
    var bola = new Image();
    bola.src = 'bola.png';
    var bolax = x_mouse;
    var bolay = y_mouse;


    function ball1() {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(bola, bolax, bolay, 15*2, 2 * 15);
        ctx.fill();
        ctx.stroke();
    }
    if((bolax <= canvas.width) && (bolax >= 0) && (bolay <= canvas.height) && (bolay >= 0)){
        ball1();
        requestAnimationFrame(ball1)
        requestAnimationFrame(campo)
    }
})
var cor_do_campo = "black";
function campo(){
    ball_();
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