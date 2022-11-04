var array = []; //recebe toda string do .txt separado por linha
let separa_num = [];// Separa por elemento
let valores_x = [];
let valores_y = [];valores_y[0] = 0;
let tempo = []; tempo[0] = 0;
var openFileReadAsText = function(event) { var input = event.target;
    var reader = new FileReader(); reader.onload = function(){
        const str = new String(reader.result);
        //document.getElementById("texto").innerHTML = reader.result;
        array = str.split("\n");
        ler();
        grafico(valores_x, valores_y);
    };
    reader.readAsText(input.files[0]);
};
function ler(){// Le os dados e separa por tempo, x, y
    for(var i = 1; i < array.length-1; i++){
        separa_num = array[i].split("\t");
        tempo[i] = parseFloat(separa_num[0].replace(",", "."))
        valores_x[i] = parseFloat(separa_num[1].replace(",", "."))
        valores_y[i] = parseFloat(separa_num[2].replace(",", "."))
        //console.log("Tempo: " + separa_num[0] + " X: " + separa_num[1] + " Y: " + separa_num[2] +"\n");
        //console.log("\nValor Y: " +valores_y[i]+"\n");
    }
}

