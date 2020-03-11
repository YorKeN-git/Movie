const url = new URL(document.location.href);
const req = new XMLHttpRequest();

//Je récuperd mon ID dans mon URL 
let id = url.searchParams.get("info_film");
//Prépare la requête
req.open("GET", "http://www.omdbapi.com/?apikey=c537c65c&i=" + id + "&plot=full", true);
//Envoi de la requête 
req.send();
//Vérifie l'état de la requête
req.onreadystatechange = function() {
    if (this.readyState == 0) {
        console.log("0: request not initialized");
    } else if (this.readyState == 1) {
        console.log("1: server connection established");
    } else if (this.readyState == 2) {
        console.log("2: request received");
    } else if (this.readyState == 3) {
        console.log("3: processing request");
    } else {
        console.log("4: request finished and response is ready");
        //Recuperd mon Json et le place dans response
        let response = req.responseText;
        console.log(response);
        let films = new Array();
        //Création de notre tableau de films
        films = JSON.parse(response);
        console.log(films);
        //Mise en page du film souhaité
        document.getElementById("infoFilm").innerHTML = '<div><img src="' + films.Poster + '" alt="Poster" class="poster" id="taille"><h3 class="info">' + films.Title + ' <small>( ' + films.Year + ' )</small></h3><br><br><br><li class="info">Genre : ' + films.Genre + ' </li><br><li class="info">Réalisateur : ' + films.Director + ' </li><br><li class="info">Durée : ' + films.Runtime + ' </li><br><li class="info">Acteurs : ' + films.Actors + ' </li><br><li class="info">Récompenses : ' + films.Awards + ' </li><br><br><br><p class="info">Synopsis :</p><br><p id="plot">' + films.Plot + '</p></div>';
    }
}