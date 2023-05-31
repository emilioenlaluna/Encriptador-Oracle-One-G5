const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var el = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(el, );

});



function quitarAcentos(texto) {
    const mapaAcentos = {
        Á: "A",
        É: "E",
        Í: "I",
        Ó: "O",
        Ú: "U",
        á: "a",
        é: "e",
        í: "i",
        ó: "o",
        ú: "u",
    };

    return texto
        .replace(/[ÁÉÍÓÚáéíóú]/g, (letra) => mapaAcentos[letra] || letra)
        .toLowerCase();
}



function btnEncriptar() {
    const entrada = textArea.value
    const limpio = quitarAcentos(entrada)
    const textoEncriptado = encriptar(limpio)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage = "none"
    textArea.value = "";
    copia.style.display = "block"


}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}



function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";

}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}


function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}

