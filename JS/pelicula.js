
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

/* Valoracion,duracion, descripcion, fecha */


fetch(DetallePelicula)
.then(function (res) {
    return res.json();

})
.then(function (data) {
    let datos = document.querySelector(".listadatosgrandes")
    datos.innerHTML = `  <li class="especificaciones">Valoracion: ${data.vote_average}/10</li>
                         <li class="especificaciones">Duracion: ${data.runtime} minutos</li>
                         <li class="especificaciones">Fecha de Estreno: ${data.release_date}</li>
                         <li class="botonparagenero" class="especificaciones">Generos : <a href="./generoespecificos.html" style="color: aliceblue;" class="botongeneros"> ${data.genres.name} </a></li>
                         <li><p class="descripcionpelicula">${data.overview}</p>

                         `
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

/*Recomendador*/

let recomendaciones = `https://api.themoviedb.org/3/movie/${qsIdPelicula}/recommendations?api_key=${acaVaLaAPIKey}
`
let recomendacion = document.querySelector("#recomendador")


let botonrecomendado = document.querySelector(".cajaPeliculas")
let inforecomendaciones = document.querySelector(".botonrecomendacioneschico")



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
                        <li><a href="./pelicula.html?id=${data.results[i].id}" class="titulopelicula" target="_blank" style="color: aliceblue;">${data.results[i].title}</a></li>
                        <li><a href="./pelicula.html?id=${data.results[i].id}" class="titulopelicula" target="_blank" style="color: aliceblue;">Fecha de estreno : ${data.results[i].release_date}</a></li>
                      </ul>`;
    }

    recomendacion.innerHTML = contenido;
    
})
.catch(function (error) {
    console.log(error);
});



botonrecomendado.addEventListener('click',function () {
    if (recomendacion.style.display = "none"){
        recomendacion.style.display = "flex";}
    else{
        recomendacion.style.display = "none" ; 
    }

    
});



/*trailer*/

let urltrailer = `https://api.themoviedb.org/3/movie/${qsIdPelicula}/videos?api_key=${acaVaLaAPIKey}`
let cajatrailer = document.querySelector(".cajatrailer")
fetch(urltrailer)
.then(function(res) {
    return res.json();
    
})
.then(function(data) {
    console.log(data);
    if(data.results.length == 0){
        cajatrailer.innerHTML =` <p class= "textonotrailer" > Lo sentimos pero la serie no cuenta con trailer :( </p>`
    }

    else{

    
    linkyt =`https://www.youtube.com/watch?v=${data.results[0].key}`
    video =`<iframe  width="560" height="315" src=https://www.youtube.com/watch?v=${data.results[0].key} frameborder="0" class="trailervideo" allowfullscreen></iframe>`
    cajatrailer.innerHTML = video}
    
    
})
.catch(function(error) {
    console.log(error);
    
})







let linkreviews = `https://api.themoviedb.org/3/movie/${qsIdPelicula}/reviews?api_key=${acaVaLaAPIKey}`
let cajareviews = document.querySelector(".reviews")
fetch(linkreviews)

.then(function (res) {
    return res.json();
    
})
.then(function (data) {
    console.log(data);
    contenido = `<h3 style="color: white;" class="subtitulosindex" >Reviews</h3>`
    if(data.results.length == 0){
        contenido +=` <p class= "textonotrailer" > Lo sentimos pero la pelicula no cuenta con reviews :( </p>`
    }

    else{
    for (let i = 0; i < 3; i++) {
        contenido +=`<p class="autor" style="color: white;">${data.results[i].author}:</p>
                    <p class="textoreview" style="color: white;"> ${data.results[i].content}</p>`

        
    }

    }
    cajareviews.innerHTML = contenido


})
.catch(function (error) {
    console.log(error);
    
})