// Aquí se eligen los programas y se retorna la lista (de una forma que se descubrirá mas adelante)

window.listaSeleccionados = [];

document.addEventListener('DOMContentLoaded', function () {
    
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
                handleCheckboxChange(this, listaSeleccionados);
            });
        });
    }

    function handleCheckboxChange(checkbox, listaSeleccionados) {
        if (checkbox.checked) {
            listaSeleccionados.push(checkbox.value);
        } else {
            const index = listaSeleccionados.indexOf(checkbox.value);
            if (index !== -1) {
                listaSeleccionados.splice(index, 1);
            }
        }
    }
});

function guardarLista(){
    localStorage.setItem('listaSeleccionados', JSON.stringify(listaSeleccionados))
}
