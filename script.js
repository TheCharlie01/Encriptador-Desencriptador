function encriptar(){

    //obtener valor y pasarlo a minuscula
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    //i = es para que tome mayusculas y minusculas
    //g = para que tome en cuenta toda la linea o la oración
    //m = para que tome multiples lineas
    //remplazar la letra "e" por "enter"
    var textoEncriptado = frase.replace(/e/img, "enter");
    //remplazar la letra "o" por "ober"
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    //remplazar la letra "i" por "imes"
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    //remplazar la letra "a" por "ai"
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    //remplazar la letra "u" por "ufat"
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
}

function desencriptar(){

    //obtener valor y pasarlo a minuscula
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    //i = es para que tome mayusculas y minusculas
    //g = para que tome en cuenta toda la linea o la oración
    //m = para que tome multiples lineas
    //remplazar la letra "enter" por "e"
    var textoEncriptado = frase.replace(/enter/img, "e");
    //remplazar la letra "ober" por "o"
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    //remplazar la letra "imes" por "i"
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    //remplazar la letra "ai" por "a"
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    //remplazar la letra "ufat" por "u"
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
}

function copiar(){

    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}
