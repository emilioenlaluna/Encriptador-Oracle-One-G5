/*
Instancias de Materialize
*/

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var el = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(el, );

});

/*

Selectores de entradas JS

*/

const textonormal = document.querySelector(".textonormal");
const salidatextonormal = document.querySelector(".salidatextonormal");


const textoencriptado = document.querySelector(".textoencriptado");
const salidatextoencriptado = document.querySelector(".salidatextoencriptado");


const copia = document.querySelector(".copiar");
const copiadesencriptado = document.querySelector(".copiardesencriptado");

copia.style.display = "none"
copiadesencriptado.style.display = "none"

/**
 * Funcion para eliminar acentos
 */
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
    const entrada = textonormal.value
    const limpio = quitarAcentos(entrada)
    const textoEncriptado = encriptar(limpio)
    salidatextonormal.value = textoEncriptado
    salidatextonormal.style.backgroundImage = "none"
    textonormal.value = "";
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
    const textoencriptadovar = desencriptar(textoencriptado.value)
    salidatextoencriptado.value = textoencriptadovar
    textoencriptado.value = "";

    copiadesencriptado.style.display = "block"
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
    salidatextonormal.select();
    navigator.clipboard.writeText(salidatextonormal.value)
    salidatextonormal.value = "";
    M.toast({html: 'Texto Copiado!', classes: 'rounded'});
    copia.style.display = "none"
}

function copiardesencriptado(){
    salidatextoencriptado.select();
    navigator.clipboard.writeText(salidatextoencriptado.value)
    salidatextoencriptado.value = "";
    M.toast({html: 'Texto Copiado!', classes: 'rounded'});
    copiadesencriptado.style.display = "none"
}