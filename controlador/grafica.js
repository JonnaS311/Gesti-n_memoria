document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['memoria'],
            datasets: [
                {
                    label: 'S0',
                    data: [1048576],
                    backgroundColor: 'rgb(120, 99, 132)',
                },
                {
                    label: 'p2',
                    data: [2048576],
                    backgroundColor: 'rgb(255, 99, 132)',
                },
                {
                    label: 'p3',
                    data: [3048576],
                    backgroundColor: 'rgb(255, 239, 132)',
                }
            ]
        },
        options: {
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                    ticks: {
                        callback: function (value, index, values) {
                            // Mostrar etiquetas solo para valores específicos
                            if ([1048576, 2048576, 3048576].includes(value)) {
                                return value;
                            } else {
                                return '';
                            }
                        },
                    },
                },
            },
        },
    });
});


<importScripts></importScripts>
console.log(window.listaSeleccionados); 
/*
function construirDatasets(listaDatos) {
    return listaDatos.map((dato, index) => ({
        label: `p${index + 1}`,
        data: [dato],
        backgroundColor: getRandomColor(), // Puedes usar una función para obtener colores aleatorios
    }));
}

// Ejemplo de uso
var listaDatos = [1048576, 1048576, 2048576];
var datasets = construirDatasets(listaDatos);

console.log(datasets);

// Función para obtener colores aleatorios (puedes ajustar esto según tus necesidades)
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
*/