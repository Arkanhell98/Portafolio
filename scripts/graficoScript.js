const labels = ['Basica y Media', 'Superior', 'Complementaria', 'En progreso'];

const data = [25, 25, 25, 25];

const explicaciones = {
    'Basica y Media' : '<span class="eduYear">2004 - 2014</span> <br> <span class=chartInst>Colegio Salesiano de León XIII</span> <br> Experiencia en dibujo técnico y expresión artística, complementada con sensibilidad musical, lo que permite un enfoque creativo y detallado en el desarrollo de proyectos visuales.',
    'Superior': '<span class="eduYear">2015 - 2021</span> <br> <span class=chartInst>Fundación Universidad Autónoma de Colombia</span> <br> Diseñador Industrial <br> Desarrollo y diseño de producto, gestión de software de diseño 2D y 3D, optimización de recursos, funcionamiento de procesos productivos industriales y expresión gráfica',
    'Complementaria': '<span class="eduYear">2025</span> <br> <span class=chartInst>Generation<br> Desarrollador Java FullStack</span> <br> Bootcamp intensivo de desarrollo web con enfoque Fullstack Java. Formación en frontend (HTML, CSS, JavaScript) y backend (Java, Spring Boot, MySQL). Uso de Git, metodologías ágiles y trabajo en equipo aplicado en proyectos prácticos simulando entornos reales.',
    'En progreso': '<span class="eduYear">Presente</span> <br> <span class=chartInst>Este espacio está pensado para todo lo relacionado con la educación, porque mi idea es seguir aprendiendo y estudiando constantemente. Siento que siempre hay algo nuevo por descubrir, algo que me puede ayudar a crecer o ver las cosas desde otra perspectiva. Para mí, el aprendizaje no se detiene, y quiero que este lugar refleje justamente eso: las ganas de seguir adelante, con curiosidad y mente abierta. '
};


// 👉 Función para crear el gráfico y asignarle el .textDonut cercano
function crearGrafico(canvasId) {

const selectSound = new Audio("/assets/sounds/selectSound.mp3");
  
selectSound.volume = 1
  
function playSelectSound() {
    selectSound.currentTime = 0;
    selectSound.play();
}


    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Buscar el div .textDonut más cercano al canvas
    const divExplicacion = canvas.closest('.educationGraphic')?.parentElement.querySelector('.textDonut');

    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
            label: 'Titulo?',
            data: data,
            borderWidth: 1,
            borderColor:'#9395BF',
            hoverOffset: 90,
            backgroundColor: [
                '#6E84BF',
                '#304293',
                '#101540',
                '#0E0E24'
            ]
        }]
        },
        options: {
            layout: {
                padding: 30
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    titleAlign: 'center',
                    bodyFont: {
                        family: 'Geo',
                        size: 30,
                        weight: 'bold',
                    },
                    backgroundColor: '#041340af',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    displayColors: false,
                    padding: 10,
                    cornerRadius: 6,
                    caretSize: 0,
                    callbacks: {
                        title: function () {
                            return '';
                        },
                        label: function (context) {
                            return context.label;
                        }
                    }
                },
                legend: {
                    display: false
                }
            },
            onHover: (event, chartElements) => {
                if (chartElements.length && divExplicacion) {
                    const index = chartElements[0].index;
                    const label = labels[index];
                    divExplicacion.innerHTML = explicaciones[label];
                    playSelectSound();
                } else if (divExplicacion) {
                    divExplicacion.innerHTML = "";
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    crearGrafico('eduDonut');            // gráfico normal
    crearGrafico('eduDonutResponsive');  // gráfico responsive
});


