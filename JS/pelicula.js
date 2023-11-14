
let acaVaLaAPIKey = "9c2a46253f55c5578611eba2f0cc979c";

let urlparams = new URLSearchParams(location.search);

let qsIdPelicula = urlparams.get('id');
let DetallePelicula = `https://api.themoviedb.org/3/movie/${qsIdPelicula}?api_key=${acaVaLaAPIKey}`


/* Titulo y subtitulo*/

fetch(DetallePelicula)
    .then(function (res) {
        return res.json();
    })

    .then(function (data) {
        console.log(data);
        let titulo = document.querySelector(".titulopeliculaespecifica");
        titulo.innerText = data.title; 
        let subtitulo = document.querySelector(".subtitulopeliculaespecifica")
        subtitulo.innerText = data.tagline;
    })

    .catch(function (error) {
        console.log(error);
    });

/* Valoracion,duracion */

fetch(DetallePelicula)
.then(function (res) {
    return res.json();

})
.then(function (data) {
    let datos = document.querySelector(".listadatosgrandes")
    datos.innerHTML = `  <li class="especificaciones">Valoracion: ${data.vote_average}/10</li>
                         <li class="especificaciones">Duracion: ${data.runtime} minutos</li>
                         <li class="botonparagenero" class="especificaciones">Generos : <a href="./generoespecificos.html" style="color: aliceblue;" class="botongeneros"> ${data.genres.name}</a></li>
                         `
})
.catch(function (error) {
 console.log(error);
    
    
});


/* fecha de estreno y descripcion */
fetch(DetallePelicula)
.then(function (res) {
    return res.json();
})

.then(function (data) {
    let fechadeestreno = document.querySelector(".fechadeestreno")
    fechadeestreno.innerText = "Fecha de estreno: "+ data.release_date;
    let descripcion = document.querySelector(".descripcionpelicula")
    descripcion.innerText = data.overview
})
.catch(function (error) {

    console.log(error);
});



/*Fetch boton de genero  */

fetch(DetallePelicula)
.then(function (res) {
    return res.json();
})
.then(function (data) {
    boton = document.querySelector(".botongeneros")
    contenido = " "
    for (var i = 0; i < data.genres.length; i++) {
        contenido += ` <a href="./generoespecificos.html" style="color: aliceblue;" class="botongeneros"> ${data.genres[i].name}</a>
        `
    }
    boton.innerHTML = contenido


})
.catch(function (error) {
console.log(error);
})


/*Portada*/

portada = document.querySelector(".cartelerapeliespecifica")

fetch(DetallePelicula)
.then(function (res) {
    return res.json();
})
.then(function (data) {
    portada = document.querySelector(".cartelerapeliespecifica")
    portada.src = `https://image.tmdb.org/t/p/w500/${data.poster_path} 
    `
    
})
.catch(function (error) {
    console.log(error);
})

