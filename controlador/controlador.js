// Solo es un medio para obtener y retornar los datos de la configuración de cada uno de los modos

// Variable globales
window.tipo
window.particion
window.arrayParticiones = []
window.tablaVisual = []
window.grafica
window.listaProgramas = {}
window.listaSeleccionados = []
window.opcionSeleccionada

// Parte de la interfaz que controla lo que se muestra en pantalla
function mostrarDiv() {
    document.getElementById('particiones').style.display = 'none';
    document.getElementById('iframe').style.display = 'flex';
}

function bloquearBoton(idBoton) {
    let boton = document.getElementById(idBoton);
    if (boton) {
      boton.disabled = true;
      boton.style.backgroundColor = "gray";
    }
  }

  function desbloquearBoton(idBoton) {
    let boton = document.getElementById(idBoton);
    if (boton) {
      boton.disabled = false;
      boton.style.backgroundColor = "";
    }
  }

// Conversion de la tabla para mostrarla
function convGrafaTab(tablaOriginal) {
    const nuevaTabla = [];

    for (const fila of tablaOriginal) {
        const nuevoFila = [];

        // Primer campo
        nuevoFila.push(fila[0] || null);

        // Segundo campo
        if (fila[0] == null){
            nuevoFila.push(0);
        } else {
            nuevoFila.push(1);
        }

        // Tercer campo
        nuevoFila.push(fila[1] || 0);

        // Cuarto campo (convertir a hexadecimal)
        nuevoFila.push(fila[1].toString(16).toUpperCase().padStart(6, '0'));

        nuevaTabla.push(nuevoFila);
    }

    localStorage.setItem('tablaVisual', JSON.stringify(nuevaTabla))
}

function crearParticiones(tamanoParticion) {
    const particiones = [];

    particiones.push(['SO', 0, 1048575]);

    let inicio = 1048576;

    while (inicio < 16777216) {
        var fin = inicio + tamanoParticion - 1;
        if (fin > 16777216) {
            fin = 16777216

        }
        particiones.push([null, inicio, fin]);
        inicio = fin + 1;
    }
    return particiones;
}

function crearParticiones2(tamanosParticiones) {
    const particiones = [];

    particiones.push(['SO', 0, 1048575]);

    let inicio = 1048576;
    let tamanoIndex = 0;

    while (inicio < 16777216) {
        let tamanoParticion;

        if (tamanosParticiones && tamanosParticiones.length > 0 && tamanoIndex < tamanosParticiones.length) {
            tamanoParticion = tamanosParticiones[tamanoIndex];
        } else {
            tamanoParticion = 16777216 - inicio;
        }
        let fin = inicio + tamanoParticion - 1;

        if (fin > 16777216) {
            fin = 16777216;
        }
        particiones.push([null, inicio, fin]);

        inicio = fin + 1;
        tamanoIndex++;
    }
    return particiones;
}

function seleccionarParticiones() {
    if (localStorage.getItem('tipo') == 'PETF') {
        return crearParticiones(parseInt(localStorage.getItem('particion')))
    }
    if (localStorage.getItem('tipo') == 'PETV') {
        return crearParticiones2(JSON.parse(localStorage.getItem('arrayParticiones')))
    }
    if (localStorage.getItem('tipo') == 'PDSC') {
        return [
            ['SO', 0, 1048576],
            [null, 1048576, 16777216]
        ];
    }
}