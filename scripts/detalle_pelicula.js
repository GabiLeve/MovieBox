//CARROUSEL

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

let similaresDiv = document.querySelector('.peliculas_similares');
const similarSection = document.querySelector('.similares');
let iterador = 0;
const botonAnterior = document.getElementById('anteriorP');
const botonSiguiente = document.getElementById('siguienteP');
const peliculas = filtrarTipo('Pelicula');

botonAnterior.addEventListener('click', () => {
    iterador--;
    if(iterador < 0){
        iterador = peliculas.length - 1;
    }
    mostrarContenido(peliculas,iterador);
});

botonSiguiente.addEventListener('click', () => {
    iterador++;

    if(iterador == peliculas.length){
        iterador = 0;
    }

    mostrarContenido(peliculas,iterador);
});

document.addEventListener('DOMContentLoaded', function () {
    mostrarContenido(peliculas,0);
});

function filtrarTipo(tipo) {
    let contenidoFiltrado = cards.filter((card) => card.type === tipo);
    return contenidoFiltrado;
}

function mostrarContenido(contenidos, posicion) {

    actualizarContenidos();

    let contador = 0;
    for (posicion; posicion < contenidos.length  && contador < 4; posicion++) {
        if (contador < 4) {
            let a = document.createElement('a');
            if (contenidos[posicion].type === 'Serie') {
                a.setAttribute('href', 'detalle_serie.html');
            } else {
                a.setAttribute('href', 'detalle_pelicula.html');
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
            similaresDiv.appendChild(a);
        }
        
        if(posicion == contenidos.length - 1){
            posicion = -1;
        }
        
        contador++
    }
}

function actualizarContenidos() {
    similaresDiv.remove();
    let similaresDivs = document.createElement('div');
    similaresDivs.setAttribute('class', 'peliculas_similares');
    similarSection.appendChild(similaresDivs);
    similaresDiv = similaresDivs;
}

function filtrarTipo(tipo) {
    let contenidoFiltrado = cards.filter((card) => card.type === tipo);
    return contenidoFiltrado;
}

