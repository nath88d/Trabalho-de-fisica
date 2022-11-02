
function grafico(xArray, yArray){//O numero de elementos em x temque ser o mesmo em y 
    
    // Define Data
    var data = [{
        x:xArray,
        y:yArray,
        mode:"lines"
    }];
    
    // Define Layout
    var layout = {
        xaxis: {range: [50, 160], title: "Tempo"},
        yaxis: {range: [0, 16], title: "Velocidade"},  
        title: "velocidade em funcao do tempo"
    };
    
    // Display using Plotly
Plotly.newPlot("grafico", data, layout);
}
var x= [50,60,70,80,90,100,110,120,130,140,150];
var y = [7,8,8,9,5,1,10,11,14,14,15];
grafico(x,y);