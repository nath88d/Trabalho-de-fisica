var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
document.addEventListener("mousemove", function(evento) {
    rect = canvas.getBoundingClientRect();
    x_mouse = evento.clientX - rect.left;
    y_mouse = evento.clientY - rect.top;
    var bola = {
        x: x_mouse,
        y: y_mouse,
        raio: 15,
        cor: "yellow"
    }
    function ball1() {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.fillStyle = bola.cor;
        ctx.beginPath();
        ctx.arc(bola.x, bola.y, bola.raio, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    if((bola.x <= 650) && (bola.x >= 0) && (bola.y <= 650) && (bola.y >= 0)){
        ball1()
        requestAnimationFrame(ball1)
    }
})