// Solo es un medio para obtener y retornar los datos de la configuración de cada uno de los modos

var particion;
var opcionSeleccionada;
var arrayParticiones = []; // Para el variable


// ----------------  PARTICIONES FIJAS --------------------------------------
function obtenerValoresPETF() {
    particion = document.getElementById("particion").value;
}

function retornarValoresPETF() {
    return particion;
}

// ---------------- PARTICIONES VARIABLES --------------------------------------

function obtenerDatosParticiones() {
    var numeroParticiones = document.getElementById("nombre").value;
    arrayParticiones.push(numeroParticiones);

    document.getElementById("nombre").value = "";
}

function obtenerValoresPETV() {
    var formulario = document.getElementById("jsonForm");
    var opciones = formulario.elements["option"];

    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            opcionSeleccionada = opciones[i].value;
            break;
        }
    }
}

function retornarValoresPETV() {
    return arrayParticiones, opcionSeleccionada;
}


// ---------------- PARTICIONES DINAMICAS --------------------------------------

function obtenerValoresPDSC() {
    var formulario = document.getElementById("jsonForm");
    var opciones = formulario.elements["option"];

    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            opcionSeleccionada = opciones[i].value;
            break;
        }
    }
}

function retornarValoresPDSC() {
    return opcionSeleccionada;
}

function obtenerValoresPDCC() {
    mostrarDiv() // Aun no hace nada
}

// Parte de la interfaz que controla lo que se muestra en pantalla
function mostrarDiv() {
    document.getElementById('particiones').style.display = 'none';
    document.getElementById('iframe').style.display = 'flex';
}