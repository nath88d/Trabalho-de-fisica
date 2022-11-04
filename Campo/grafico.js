globalThis
function grafico(xArray, yArray){//O numero de elementos em x temque ser o mesmo em y 
    
    // Configura os valores
    var data = [{
        x:xArray,
        y:yArray,
        mode:"lines",
        line: {
            color: 'rgb(255, 9, 0)',
            width: 3
        }
    }];
    
    // Define o Layout
    var layout = {
        xaxis: {range: [0,9] ,title: "X"},//Delimita o tamanho de x
        yaxis: {range: [0, 6], title: "Y"},//Delimita otamanho de y
        title: "Trajetoria da bola"
    };
    
    // Display using Plotly
Plotly.newPlot("grafico", data, layout);
}

/*
function graficos_multiplos(){//Recebe formula por string
    var exp2 = "(x**0.1+x**2-1)-x**2";
    var exp1 = "x";
    var exp3 = "x*0.8+ 7";

    // Gera valores

    var x1Values = [];
    var x2Values = [];
    var x3Values = [];
    var y1Values = [];
    var y2Values = [];
    var y3Values = [];
/*
    for(var i = 1; i < array.length; i++){
    x1Values.push(x);
    x2Values.push(x);
    x3Values.push(x);
    y1Values.push(eval(exp1));
    y2Values.push(eval(exp2));
    y3Values.push(eval(exp3));
    }*/

    // Define Data
/*    var data = [
    {x: x1Values, y: y1Values, name:"Aceleracao do robo", mode:"markers"},
    {x: x2Values, y: y2Values, name:"Velocidade do robo", mode:"lines"},
    {x: x3Values, y: y3Values, name:"Velocidade da bola", mode:"lines"}
    ];

    // Define Layout
    var layout = {title: "[y=" + exp1 + "] [y=" + exp2 + "] [y=" + exp3 + "]"};

    // Display using Plotly
    Plotly.newPlot("mult", data, layout);
}*/
//graficos_multiplos();