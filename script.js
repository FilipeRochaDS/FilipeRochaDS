//delcarando variaveis.  
var botaoCript = document.querySelector("#btn-cripto");
var botaoDescript = document.querySelector("#btn-descripto");
var botaocopiar = document.querySelector("#btn-copy");

var textoProcess = document.getElementById("texto-process");
var apagaTexto = document.getElementById("input-texto");
// função do click no botão criptografar
botaoCript.addEventListener("click", function(evento){
    evento.preventDefault();
    var msgCript = cripto();
    textoProcess.value = msgCript;
    apagaTexto.value = "";
});

// função do click no botão descriptografar
botaoDescript.addEventListener("click", function(evento){
    evento.preventDefault();
    var msgDescript = descripto();
    textoProcess.value = msgDescript;
    apagaTexto.value = "";  
});

// função do click no botão copiar
botaocopiar.addEventListener("click", function(evento){
    evento.preventDefault();
    copiar();

});


function cripto(){

    var texto = document.getElementById("input-texto").value;
    var textoAux = '';

    for (var i = 0; i < texto.length; i++) {
    if(texto[i] == "a"){
        textoAux+="ai";
    }else if(texto[i] == "e"){
        textoAux+="enter";
    }else if(texto[i] == "i"){
        textoAux+="imes";
    }else if(texto[i] == "o"){
        textoAux+="ober";
    }else if(texto[i] == "u"){
        textoAux+="ufat";
    }else{
        textoAux+=texto[i];
    }
    }

    return textoAux;
}


function descripto(){

    var texto = document.getElementById("input-texto").value;
    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");
    
    return texto;
}


function copiar(){
    textoProcess = document.getElementById("texto-process");

    textoProcess.select();
    textoProcess.setSelectionRange(0, 99999); 
    document.execCommand("copy");
}