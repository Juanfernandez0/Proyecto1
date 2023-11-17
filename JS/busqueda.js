
let acaVaLaAPIKey = "9c2a46253f55c5578611eba2f0cc979c";

let urlparams = new URLSearchParams(location.search);

let peliculabuscada = urlparams.get('busqueda');

let url = `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${peliculabuscada}`;

let contenedorgrande = document.querySelector("#contenidobuscado")

console.log(url);




fetch(url)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data);

    let miData = data.results;
    let contenido = " ";

    if(miData.length === 0){
        contenido = `    <p>Lo lamentamos, pero no tenemos resultados para su busqueda</p>
        `
    }
    else{

    for (let i = 0; i < miData.length; i++) {
        
        contenido += `<ul class="pelicula4">
        <li><img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" class="portada"></li>
        <li><a href="./pelicula.html?id=${miData[i].id}" class="titulopelicula" target="_blank" style="color: aliceblue;">${miData[i].title}</a></li>
        <li><a href="./pelicula.html?id=${miData[i].id}" class="titulopelicula" target="_blank" style="color: aliceblue;">Fecha de estreno : ${miData[i].release_date}</a></li>
      </ul>`


        
    }
    }

    contenedorgrande.innerHTML = contenido
})

.catch(function(error) {
    console.log(error);
})
