const particiones = [
    ['SO', 0, 1048576],
    ['p3', 1048576, 1484777],
    ['p2', 1484777, 4181385],
    ['ind', 4181385, 16777215],

];

let datasets; // Declara la variable aquí

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d');
    const valoresUltimaColumna = particiones.map(particion => particion[2]);

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
                /*ticks: {
                    callback: function(value) {
                        if (valoresUltimaColumna.includes(value)) {
                            return value;
                          } 
                    }
                } */  
            }
        }
    };

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Memoria RAM'],
            datasets: datasets
        },
        options: options
    });
});



// Función para obtener el color de fondo
function getBackgroundColor(label, isDefined) {
    if (label === 'ind') {
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


console.log(datasets);