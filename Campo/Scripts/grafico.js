globalThis
function graficos(xArray, yArray){//O numero de elementos em x temque ser o mesmo em y 
    
    // Configura os valores
    let trajetoria_bola = {
        x:xArray,
        y:yArray,
        mode:"lines",
        line: {
            color: 'rgb(255, 9, 0)',
            width: 3
        }
    }

    let data = [trajetoria_bola];
    
    // Define o Layout
    let layout = {
        xaxis: {range: [0,9] ,title: "X"},//Delimita o tamanho de x
        yaxis: {range: [0, 6], title: "Y"},//Delimita otamanho de y
        title: "Trajetoria da bola"
    };
    
    // Display using Plotly
    Plotly.newPlot("grafico", data, layout);

}


function graficos_multiplos(tempo,x,y){//Recebe formula por string
    var exp2 = "(x**0.1+x**2-1)-x**2";
    var exp1 = "x";
    var exp3 = "x*0.8+ 7";

    // Gera valores
/*
    var xt = [];
    var x2Values = [];
    var x3Values = [];
    var y1Values = [];
    var y2Values = [];
    var y3Values = [];

    for(var i = 1; i < array.length; i++){
    xt.push(x);
    x2Values.push(x);
    x3Values.push(x);
    y1Values.push(eval(exp1));
    y2Values.push(eval(exp2));
    y3Values.push(eval(exp3));
    }
*/
    // Define Data
    let data = [
        {x: tempo, y: y, name:"Y(t)", mode:"markers", line:{color: "blue", width: 1}},
        {x: tempo, y: x, name:"X(t)", mode:"markers", line:{color: "orange", width: 1}}
    ];

    // Define Layout
    var layout = {        
        xaxis: {range: [0,12] ,title: "Tempo"},//Delimita o tamanho de x
        yaxis: {range: [0, 8], title: "X/Y"},//Delimita otamanho de y
        title: "X e Y em funcao do tempo"
    };

    // Display using Plotly
    Plotly.newPlot("mult", data, layout);
}

export { graficos , graficos_multiplos };