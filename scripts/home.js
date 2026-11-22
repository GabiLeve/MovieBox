//HOME// 

const botonHome = document.getElementById('home');
const botonPeliculas = document.getElementById('pelicula');
const botonSeries = document.getElementById('serie');
const subtitulo = document.querySelector('.subtitulo_ppal');
let cardsDiv = document.querySelector('.cards');
const contenidosSection = document.getElementById('contenidos');
const categorias = document.getElementById('categorias');
const inputBuscar = document.querySelector('.input');
const botonBuscar = document.querySelector('.button');

//se define una lista de objetos cards

 
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


//Se seleccionan los elementos del DOM donde se mostrarán las tarjetas (cardsDiv) y la sección que contiene estos elementos (contenidosSection).//


document.addEventListener('DOMContentLoaded', function() {
    mostrarContenido(cards);
});


//evento para cuando el usuario selecciona una categoría del menú desplegable. 

categorias.addEventListener('change',(e) => {
    let categoria = e.target.options[e.target.value].text;
    let contenidoFiltrado;
    let valorcategoria;
    

    if(subtitulo.innerHTML === 'Películas y Series'){

        if(e.target.value != 0){
            contenidoFiltrado = filtrarCategoria(categoria, null); // Filtra por categoría
            mostrarContenido(contenidoFiltrado); // Muestra el contenido filtrado
        }else{
            mostrarContenido(cards); // Muestra todas las tarjetas
        }

    }else{
         
        // Filtra según el peliculas o series
        switch(subtitulo.innerHTML){
            case 'Películas':
                valorcategoria = 'Pelicula';
                console.log(valorcategoria)
                break;
            case 'Series':
                valorcategoria = 'Serie';
                break;
        }
        contenidoFiltrado = filtrarTipo(valorcategoria);
        if(e.target.value == 0){
            mostrarContenido(contenidoFiltrado);
        }else{
            contenidoFiltrado = filtrarCategoria(categoria, contenidoFiltrado);
            mostrarContenido(contenidoFiltrado);
        }

       
        
    }

   

})

// Función para filtrar las tarjetas por categoría
function filtrarCategoria(categoria, lista){
    let contenidoFiltrado;
    if(lista != null){
        contenidoFiltrado = lista.filter((contenido) => contenido.category === categoria.toLowerCase().trim());
    }else{
        console.log('hola')
        contenidoFiltrado = cards.filter((contenido) => contenido.category === categoria.toLowerCase().trim());
    }
    return contenidoFiltrado;
}

// Función para mostrar el contenido de las tarjetas en la página
function mostrarContenido(contenidos){

    actualizarContenidos(); // Actualiza el contenido antes de mostrar nuevas tarjetas

    contenidos.forEach((contenido) =>{
        let a = document.createElement('a');
        if(contenido.type === 'Pelicula'){
            a.setAttribute('href', 'detalle_pelicula.html');    
        }else{
            a.setAttribute('href', 'detalle_serie.html');
        }
        let article = document.createElement('article');
        article.setAttribute('class', contenido.card);
        a.appendChild(article);
        let div = document.createElement('div');
        div.setAttribute('class','textos');
        article.appendChild(div);
        let h5 = document.createElement('h5');
        h5.innerHTML = contenido.name;
        div.appendChild(h5);
        let h6 = document.createElement('h6');
        h6.setAttribute('class', 'tipo_video');
        h6.innerHTML = contenido.type;
        div.appendChild(h6);
        cardsDiv.appendChild(a);
    })
}

// Función para actualizar  el contenido de la página
function actualizarContenidos(){
    cardsDiv.remove();
    let cardsDivs = document.createElement('div');
    cardsDivs.setAttribute('class', 'cards');
    contenidosSection.appendChild(cardsDivs);
    cardsDiv = cardsDivs;
}


// Evento para el botón de búsqueda
botonBuscar.addEventListener('click', () =>{
    console.log(inputBuscar.value)
    let busqueda = inputBuscar.value;
    let contenidoFiltrado = filtrarNombre(busqueda);
    mostrarContenido(contenidoFiltrado)
})

// Función para filtrar tarjetas por nombre
function filtrarNombre(nombre){
    let contenidoFiltrado = cards.filter((card) => card.name.toLowerCase().includes(nombre.toLowerCase().trim()));
    return contenidoFiltrado;
}

// Evento para el botón de inicio (Home)
botonHome.addEventListener('click', () =>{
    mostrarContenido(cards);
    subtitulo.innerHTML = 'Películas y Series'
});

// Evento para el botón de Películas
botonPeliculas.addEventListener('click', () => {
    let contenidoFiltrado = filtrarTipo('Pelicula');
    subtitulo.innerHTML = 'Películas'
    mostrarContenido(contenidoFiltrado);
});

// Evento para el botón de Series
botonSeries.addEventListener('click', () => {
    let contenidoFiltrado = filtrarTipo('Serie');
    subtitulo.innerHTML = 'Series'
    mostrarContenido(contenidoFiltrado);
});

// Función para filtrar tarjetas por tipo (Pelicula o Serie)
function filtrarTipo(tipo) {
    let contenidoFiltrado = cards.filter((card) => card.type === tipo);
    return contenidoFiltrado;
}
    
document.getElementById("cerrarSesionBtn").addEventListener("click", function(){
    localStorage.clear();
});
