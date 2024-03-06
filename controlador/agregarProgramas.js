// Aquí se crea un nuevo programa

function AgregarPrograma() {
    // obtenemos el nombre sin espacios
    const nombre = document.getElementById("nombre").value.replace(/\s/g, "");
    const text = document.getElementById(".text").value;
    const data = document.getElementById(".data").value;
    const bss = document.getElementById(".bss").value;

    const nuevoObjeto = {
        nombre: nombre,
        text: text,
        data: data,
        bss: bss
    };

    if (!isNaN(parseInt(text)) && !isNaN(parseInt(data)) && !isNaN(parseInt(bss))) {
        if (parseInt(text) > 0 && parseInt(data) > 0 && parseInt(bss) > 0) {
            window.jsonString = localStorage.getItem('jsonString') || window.jsonString;

            const programasActuales = leerProgramas();

            const nombreExiste = programasActuales.some(objeto => objeto.nombre === nuevoObjeto.nombre);

            // Si el nombre no existe, agregar el nuevo objeto a la lista y actualizar el JSON
            // validamos que el nombre del proceso no sea igual al del sistema operativo
            if (!nombreExiste && nuevoObjeto.nombre !== 'SO') {
                programasActuales.push(nuevoObjeto);
                const nuevoJsonString = JSON.stringify(programasActuales, null, 2);

                // Verificar si la función de actualización está definida antes de llamarla
                if (window.actualizarJsonString) {
                    window.actualizarJsonString(nuevoJsonString);
                    alert('Programa guardado con éxito.');
                }
            } else {
                alert('El programa con nombre ' + nuevoObjeto.nombre + ' ya existe.');
            }

            document.getElementById("nombre").value = "";
            document.getElementById(".text").value = "";
            document.getElementById(".data").value = "";
            document.getElementById(".bss").value = "";

        } else {
            alert("Programa Explotó BOOOMMM!!! pero por colocar números negativos");
        }
    } else {
        alert("Programa Explotó BOOOMMM!!!");
    }




}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("buttonGuardar").addEventListener("click", AgregarPrograma);
    document.getElementById("volver").addEventListener("click", function () {
        window.location.href = "selecProgramas.html";
    });
});

