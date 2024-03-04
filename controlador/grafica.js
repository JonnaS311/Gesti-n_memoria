const particiones = seleccionarParticiones()

let datasets; // Declara la variable aquí

document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('storage', function (event) {
        if (event.key === 'grafica') {
            // Actualizar el valor de particiones
            const nuevasParticiones = JSON.parse(localStorage.getItem('grafica'));

            // Actualizar el valor de datasets
            datasets = nuevasParticiones.map((particion, index) => {
                const dataValue = particion[2] - particion[1] + 1;
                return {
                    label: particion[0],
                    data: [dataValue >= 0 ? dataValue : 0],
                    backgroundColor: getBackgroundColor(particion[0], dataValue >= 0),
                    borderColor: 'rgb(0, 0, 0)',
                    borderWidth: 1
                };
            });

            // Actualizar la configuración de la gráfica
            config.data.datasets = datasets;

            // Actualizar la gráfica
            myChart.update();
        }
    });

    const ctx = document.getElementById('myChart').getContext('2d');

    datasets = particiones.map((particion, index) => {
        const dataValue = particion[2] - particion[1] + 1;
        return {
            label: particion[0],
            data: [dataValue >= 0 ? dataValue : 0],
            backgroundColor: getBackgroundColor(particion[0], dataValue >= 0),
            borderColor: 'rgb(0, 0, 0)',
            borderWidth: 1
        };
    });

    const options = {
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true,
                beginAtZero: true,
            }
        }
    };

    var config = {
        type: 'bar',
        data: {
            labels: ['Memoria RAM'],
            datasets: datasets
        },
        options: options
    }

    var myChart = new Chart(ctx, config);
});



// Función para obtener el color de fondo
function getBackgroundColor(label, isDefined) {
    if (label === null) {
        return isDefined ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0)';
    }

    // Para otras etiquetas, usa colores aleatorios
    return getRandomColor();
}

// Función para obtener un color aleatorio
function getRandomColor() {
    const hue = Math.random() * 360;
    return `hsla(${hue}, 70%, 60%, 1)`;
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
        console.log(crearParticiones2(JSON.parse(localStorage.getItem('arrayParticiones'))))
        return crearParticiones2(JSON.parse(localStorage.getItem('arrayParticiones')))
    }
    if (localStorage.getItem('tipo') == 'PDSC') {
        return [
            ['SO', 0, 1048576],
            [null, 1048576, 16777216]
        ];
    }
}