let acaVaLaAPIKey = "9c2a46253f55c5578611eba2f0cc979c";
let urlparams = new URLSearchParams(location.search);
let qsIdPelicula = urlparams.get('id');
let DetalleSeries =`https://api.themoviedb.org/3/tv/${qsIdPelicula}?api_key=${acaVaLaAPIKey}`
console.log(qsIdPelicula);





/* Titulo y subtitulo*/

fetch(DetalleSeries)
    .then(function (res) {
        return res.json();
    })

    .then(function (data) {
        console.log(data);
        let titulo = document.querySelector(".titulopeliculaespecifica");
        titulo.innerText = data.name; 
        let subtitulo = document.querySelector(".subtitulopeliculaespecifica")
        subtitulo.innerText = data.tagline;
    })

    .catch(function (error) {
        console.log(error);
    });

/* Valoracion,duracion, descripcion, fecha */


    fetch(DetalleSeries)
    .then(function (res) {
        return res.json();
    
    })
    .then(function (data) {
        let datos = document.querySelector(".listadatosgrandes")
        datos.innerHTML = `  <li class="especificaciones">Valoracion: ${data.vote_average}/10</li>
                             <li class="especificaciones">Duracion: ${data.seasons.length} temporadas</li>
                             <li class="especificaciones">Fecha de Estreno:${data.last_air_date}</li>
                             <li class="botonparagenero" class="especificaciones">Generos : <a href="./generoespecificos.html" style="color: aliceblue;" class="botongeneros"> ${data.genres.name}</a></li>
                             <li><p class="descripcionpelicula">${data.overview}</p>

                             `
    })
    .catch(function (error) {
     console.log(error);
        
        
    });





/*Fetch boton de genero  */

fetch(DetalleSeries)
.then(function (res) {
    return res.json();
})
.then(function (data) {
    boton = document.querySelector(".botongeneros")
    contenido = " "
    for (let i = 0; i < data.genres.length; i++) {
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

fetch(DetalleSeries)
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

let recomendaciones = `https://api.themoviedb.org/3/tv/${qsIdPelicula}/recommendations?api_key=${acaVaLaAPIKey}
`
let recomendacion = document.querySelector("#recomendador")




fetch(recomendaciones)
.then(function (res) {
    return res.json();
    
})
.then(function (data) {

    console.log(data);

    contenido = ` ` 
    for (let i = 0; i < 5; i++) {
        contenido += `<ul class="pelicula3">
                        <li><img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" class="portada"></li>
                        <li><a href="./series.html?id=${data.results[i].id}" class="titulopelicula" target="_blank" style="color: aliceblue;">${data.results[i].name}</a></li>
                        <li><a href="./series.html?id=${data.results[i].id}" class="titulopelicula" target="_blank" style="color: aliceblue;">Fecha de estreno : ${data.results[i].first_air_date}</a></li>
                      </ul>`;
    }

    recomendacion.innerHTML = contenido;
    
})
.catch(function (error) {
    console.log(error);
});

