// Solo es un medio para obtener y retornar los datos de la configuración de cada uno de los modos

// Variable globales
window.tipo
window.particion
window.arrayParticiones = []
window.grafica
window.listaProgramas = {}
window.listaSeleccionados = []
window.opcionSeleccionada

// Parte de la interfaz que controla lo que se muestra en pantalla
function mostrarDiv() {
    document.getElementById('particiones').style.display = 'none';
    document.getElementById('iframe').style.display = 'flex';
}