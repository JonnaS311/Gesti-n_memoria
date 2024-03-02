// Aquí se crea un nuevo programa

function AgregarPrograma() {
    const nombre = document.getElementById("nombre").value;
    const text = document.getElementById(".text").value;
    const data = document.getElementById(".data").value;
    const bss = document.getElementById(".bss").value;

    const nuevoObjeto = {
        nombre: nombre,
        text: text,
        data: data,
        bss: bss
    };

    window.jsonString = localStorage.getItem('jsonString') || window.jsonString;

    const programasActuales = leerProgramas();

    programasActuales.push(nuevoObjeto);

    const nuevoJsonString = JSON.stringify(programasActuales, null, 2);

    if (window.actualizarJsonString) {
        window.actualizarJsonString(nuevoJsonString);
    }

    document.getElementById("nombre").value = "";
    document.getElementById(".text").value = "";
    document.getElementById(".data").value = "";
    document.getElementById(".bss").value = "";

    // Mostrar un mensaje de confirmación
    alert("Programa guardado con éxito.");
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("buttonGuardar").addEventListener("click", AgregarPrograma);
    document.getElementById("volver").addEventListener("click", function () {
        window.location.href = "formProgramas.html";
    });
});

