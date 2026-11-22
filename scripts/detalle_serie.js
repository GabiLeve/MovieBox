//SELECCIÓN DE TEMPORADAS Y CAPÍTULOS

document.addEventListener('DOMContentLoaded', () => {
    const temporadaSelect = document.getElementById('temporadas');
    const capitulosSelect = document.getElementById('capitulos');

    // Definimos un objeto que mapea temporadas a la cantidad de capítulos
    const temporadas = {
        1: 8, // Temporada 1 tiene 8 capítulos
        2: 10, // Temporada 2 tiene 10 capítulos
        3: 15  // Temporada 3 tiene 15 capítulos
    };
    
     // Añadimos un listener para cuando cambie la selección de temporada
    temporadaSelect.addEventListener('change', function() {
        const temporadaSeleccionada = this.value;
         // Resetear el select de capítulos con una opción predeterminada
        capitulosSelect.innerHTML = '<option value="">Seleccione un capítulo</option>'; // Resetear los capítulos

        if (temporadaSeleccionada) {
            const numeroDeCapitulos = temporadas[temporadaSeleccionada];

             // Añadimos opciones de capítulos dinámicamente según la temporada
            for (let i = 1; i <= numeroDeCapitulos; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = `Capítulo ${i}`;
                capitulosSelect.appendChild(option);
            }
        }
    });
});


//CARROUSEL

// Lista de todas las tarjetas con información sobre películas y series
const cards = [
    { type: 'Pelicula', name: 'Iron man 3', category: 'acción', card: 'card-1' },
    { type: 'Pelicula', name: 'Resident evil', category: 'acción', card: 'card-2' },
    { type: 'Pelicula', name: 'Bohemian Rhapsody', category: 'musicales', card: 'card-3' },
    { type: 'Pelicula', name: 'La vieja guardia', category: 'acción', card: 'card-4' },
    { type: 'Serie', name: 'Carol y el fin del mundo', category: 'drama', card: 'card-5' },
    { type: 'Pelicula', name: 'Proyecto power', category: 'acción', card: 'card-6' },
    { type: 'Pelicula', name: 'Venom', category: 'acción', card: 'card-7' },
    { type: 'Serie', name: 'Charmed', category: 'fantasía', card: 'card-8' },
    { type: 'Pelicula', name: 'Duro de matar 4.0', category: 'acción', card: 'card-9' },
    { type: 'Pelicula', name: 'Morbius', category: 'acción', card: 'card-10' },
    { type: 'Pelicula', name: 'Life', category: 'ciencia ficción', card: 'card-11' },
    { type: 'Serie', name: 'Game of thrones', category: 'fantasía', card: 'card-12' },
    { type: 'Pelicula', name: 'Wanda visión', category: 'acción', card: 'card-13' },
    { type: 'Pelicula', name: 'El reino animal', category: 'drama', card: 'card-14' },
    { type: 'Pelicula', name: 'Thor', category: 'acción', card: 'card-15' },
    { type: 'Serie', name: 'Manifest', category: 'drama', card: 'card-16' },
    { type: 'Pelicula', name: '300', category: 'acción', card: 'card-17' },
    { type: 'Pelicula', name: 'Spider man', category: 'acción', card: 'card-18' },
    { type: 'Pelicula', name: 'Avengers', category: 'acción', card: 'card-19' },
    { type: 'Pelicula', name: 'Duro de matar', category: 'acción', card: 'card-20' },
    { type: 'Serie', name: 'The sandman', category: 'fantasía', card: 'card-21' },
    { type: 'Pelicula', name: 'Batman', category: 'acción', card: 'card-22' },
    { type: 'Serie', name: 'This is us', category: 'drama', card: 'card-23' },
    { type: 'Serie', name: 'The X files', category: 'ciencia ficción', card: 'card-24' }
];

// Seleccionamos el contenedor donde se mostrarán las tarjetas
let similaresDiv = document.querySelector('.series_similares');
const similarSection = document.querySelector('.similares');
let iterador = 0; // Contador para controlar la posición actual en el carrusel
const botonAnterior = document.getElementById('anterior');
const botonSiguiente = document.getElementById('siguiente');
const series = filtrarTipo('Serie');


// Evento para el botón anterior
botonAnterior.addEventListener('click', () => {
    iterador--; //Restamos uno al iterador para ir a la tarjeta anterior
    if(iterador < 0){ // Si el iterador es menor que 0, lo ponemos en la última tarjeta
        iterador = series.length - 1;
    }
    mostrarContenido(series,iterador);
});

// Evento para el botón siguiente
botonSiguiente.addEventListener('click', () => {
    iterador++;

    if(iterador == series.length){
        iterador = 0;
    }

    mostrarContenido(series,iterador);
});

// Evento para cargar el contenido cuando la página se haya cargado completamente
document.addEventListener('DOMContentLoaded', function () {
    mostrarContenido(series,0);
});

// Función para filtrar las tarjetas por tipo 
function filtrarTipo(tipo) {
    let contenidoFiltrado = cards.filter((card) => card.type === tipo); // Filtramos
    return contenidoFiltrado;
}

// Función para mostrar las tarjetas en el carrusel
function mostrarContenido(contenidos, posicion) {

    actualizarContenidos();

    let contador = 0;  // Inicializamos un contador para controlar el número de tarjetas mostradas
    for (posicion; posicion < contenidos.length  && contador < 4; posicion++) {
        if (contador < 4) { // Creamos elementos HTML dinámicamente para cada tarjeta
            let a = document.createElement('a');
            if (contenidos[posicion].type === 'Pelicula') {
                a.setAttribute('href', 'detalle_pelicula.html');
            } else {
                a.setAttribute('href', 'detalle_serie.html');
            }
            let article = document.createElement('article');
            article.setAttribute('class', contenidos[posicion].card);
            a.appendChild(article);
            let div = document.createElement('div');
            div.setAttribute('class', 'textos');
            article.appendChild(div);
            let h5 = document.createElement('h5');
            h5.innerHTML = contenidos[posicion].name;
            div.appendChild(h5);
            let h6 = document.createElement('h6');
            h6.setAttribute('class', 'tipo_video');
            h6.innerHTML = contenidos[posicion].type;
            div.appendChild(h6);
            similaresDiv.appendChild(a); // Agregamos la tarjeta al contenedor principal
        }
        
        if(posicion == contenidos.length - 1){
            posicion = -1; // Reiniciamos el índice si llegamos al final del array
        }
        
        contador++ // Incrementamos el contador de tarjetas mostradas
    }
}


// Función para actualizar (resetear) el contenido del carrusel
function actualizarContenidos() {
    similaresDiv.remove();
    let similaresDivs = document.createElement('div');
    similaresDivs.setAttribute('class', 'series_similares');
    similarSection.appendChild(similaresDivs);
    similaresDiv = similaresDivs;
}

function filtrarTipo(tipo) {
    let contenidoFiltrado = cards.filter((card) => card.type === tipo);
    return contenidoFiltrado;
}



