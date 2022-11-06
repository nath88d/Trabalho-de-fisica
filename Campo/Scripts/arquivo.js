const lerArquivo = (event) => { 

    let input = event.target;
    let reader = new FileReader()
    reader.readAsText(input.files[0]);
    let obj = [];
    return new Promise( (resolve, reject) => {
        reader.onload = () => {
            const str = new String(reader.result);
            str.split("\n").forEach(line => {
               
                let keywords = line.split("\t")
                keywords.forEach((word, index) => {
                    keywords[index] = word.replace(",", ".")
                })
                
                if (keywords[0] != "t/s") {
                    obj.push({x: parseFloat(keywords[1]), y: parseFloat(keywords[2])});
                }
            })
           resolve(obj)
        };
    } )
};

export { lerArquivo };
