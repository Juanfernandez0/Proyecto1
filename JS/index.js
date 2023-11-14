let apikey = "9c2a46253f55c5578611eba2f0cc979c";
let peliculaspopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;
let Seriespopulares  =`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}`;
let peliculasmejorvaloradas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`;


let contenedor1 = document.querySelector('#peliculaspopulares');
let contenedor2 = document.querySelector('#seriespopulares');
let contenedor3 = document.querySelector('#peliculasmejorvaloradas'); 


fetch(peliculaspopulares)
.then(function(res) {
    return res.json();
})
.then(function(data) {

    let miData = data.results;
    let contenido = " ";
    for (let i = 0; i < 5; i++) {

        console.log(miData[i]);
        contenido += `<ul class="pelicula3">
                        <li><img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" class="portada"></li>
                        <li><a href="./pelicula.html?id=${miData[i].id}" class="titulopelicula" target="_blank" style="color: aliceblue;">${miData[i].title}</a></li>
                        <li><a href="./pelicula.html?id=${miData[i].id}" class="titulopelicula" target="_blank" style="color: aliceblue;">Fecha de estreno : ${miData[i].release_date}</a></li>
                      </ul>`
    }

    contenedor1.innerHTML = contenido;
})


.catch(function(error) {
    console.log(error);
});









// Segundo fetch //


fetch(Seriespopulares)
.then(function(res) {
    return res.json();
})
.then(function(data) {

    let miData = data.results;
    let contenido = " ";
    for (let i = 0; i < 5; i++) {

        console.log(miData[i]);
        contenido += `<ul class="pelicula3">
                        <li><img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" class="portada"></li>
                        <li><a href="./series.html?id=${miData[i].id}" class="titulopelicula" target="_blank" style="color: aliceblue;">${miData[i].name}</a></li>
                        <li><a href="./series.html?id=${miData[i].id}" class="titulopelicula" target="_blank" style="color: aliceblue;">Fecha de estreno : ${miData[i].first_air_date}</a></li>
                      </ul>`
    }

    contenedor2.innerHTML = contenido;
})


.catch(function(error) {
    console.log(error);
});








// Tercer Fetch//



fetch(peliculasmejorvaloradas)
.then(function(res) {
    return res.json();
})
.then(function(data) {

    let miData = data.results;
    let contenido = " ";
    for (let i = 0; i < 5; i++) {

        console.log(miData[i]);
        contenido += `<ul class="pelicula3">
                        <li><img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" class="portada"></li>
                        <li><a href="./pelicula.html?id=${miData[i].id}" class="titulopelicula" target="_blank" style="color: aliceblue;">${miData[i].title}</a></li>
                        <li><a href="./pelicula.html?id=${miData[i].id}" class="titulopelicula" target="_blank" style="color: aliceblue;">Fecha de estreno : ${miData[i].release_date
                            }</a></li>
                      </ul>`
    }

    contenedor3.innerHTML = contenido;
})


.catch(function(error) {
    console.log(error);
});




