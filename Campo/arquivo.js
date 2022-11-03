/*function handleFile(files){
    const reader = new FileReader();
    reader.onload = (event) => {
        let data = event.target.result;
        document.querySelector("#texto").value = data; 
    };
    reader.readAsText(files);
    console.log(reader.result.substring(0, 200));
}*/
var array = [];
var array_float = [];
var openFileReadAsText = function(event) { var input = event.target;
    var reader = new FileReader(); reader.onload = function(){ var text = reader.result;
        const str = new String(reader.result);
        document.getElementById("texto").innerHTML = reader.result;
        array = str.split("\n");
        ler();
    };
    reader.readAsText(input.files[0]);
};
function ler(){
    for(var i = 0; i < array.length; i++){
        array_float[i] = parseFloat(array[i].replace(",", "."))
        console.log(array[i]+"\n");
    }
}

