// Aquí se eligen los programas y se retorna la lista
document.addEventListener('DOMContentLoaded', function () {

    // Lógica de listas

    const objetosIniciales = cargarDesdeArchivo();


    mostrarObjetosEnLista(objetosIniciales);

    function cargarDesdeArchivo() {
        window.jsonString = localStorage.getItem('jsonString') || window.jsonString;
        return leerProgramas();
    }

    function mostrarObjetosEnLista(objetos) {
        const lista = document.getElementById('objetos-lista');

        objetos.forEach(objeto => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<input type="checkbox" value="${objeto.nombre}" id="${objeto.nombre}">
                ${objeto.nombre}`;
            lista.appendChild(listItem);

            const checkbox = listItem.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', function () {
                handleCheckboxChange(this, listaSeleccionados, objeto);
            });
        });
    }

    function handleCheckboxChange(checkbox, listaSeleccionados, objeto) {
        if (checkbox.checked) {
            listaSeleccionados.push(objeto);
        } else {
            const index = listaSeleccionados.indexOf(objeto);
            if (index !== -1) {
                listaSeleccionados.splice(index, 1);
            }
        }
    }

    // Eventos del botón

    document.getElementById("botonAgregar").addEventListener("click", function () {
        window.location.href = "formularioProg.html";
    });
    document.getElementById("botonIniciar").addEventListener("click", function () {
        guardarLista()
        setTimeout(function() {
            window.parent.postMessage("botonIniciarPulsado", "*");
        }, 100);
    });
});


const stack = 65536
const heap = 131072

function conversionlista() {
    for (listaSeleccionados of listaSeleccionados) {
        const sumaTotal = parseInt(listaSeleccionados["text"]) + parseInt(listaSeleccionados["data"]) + parseInt(listaSeleccionados["bss"]) + stack + heap;

        listaProgramas[listaSeleccionados.nombre] = sumaTotal;
    }
    listaSeleccionados = []   
}

function guardarLista() {
    conversionlista()
    localStorage.setItem('listaProgramas', JSON.stringify(listaProgramas))
}

function reiniciar() {
    window.listaProgramas = {}
}


