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
                    data: [1048576],
                    backgroundColor: 'rgb(255, 99, 132)',
                },
                {
                    label: 'p3',
                    data: [1048576],
                    backgroundColor: 'rgb(255, 239, 132)',
                }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart - Stacked'
                }
            },
            responsive: true,
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                }
            },
            animation: {
                onComplete: function () {
                    const chartInstance = this.chart;
                    const ctx = chartInstance.ctx;

                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    ctx.fillStyle = '#000000';

                    this.data.datasets.forEach(function (dataset, i) {
                        const meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            const data = dataset.data[index];
                            if (data !== null && data !== undefined) {
                                const yPos = bar.y - 10;
                                ctx.fillText(data, bar.x, yPos);
                            }
                        });
                    });
                }
            }
        }
    });
});
