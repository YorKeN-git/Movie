const req = new XMLHttpRequest();

function onLoadPageSW() {
    let nomFilm = "Star Wars";
    //Prépare la requête
    req.open("GET", "http://www.omdbapi.com/?apikey=c537c65c&s=" + nomFilm, true);
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
            //Affiche chaque film trouvé dans notre div 'film'
            for (let i = 0; i < films.Search.length; i++) {
                document.getElementById('film').innerHTML += '<div class="resultat"><form action="film.html" method="get"><button type="submit" name="info_film" value="' + films.Search[i].imdbID + '"class="btn-link">' + films.Search[i].Title + '</button> ( ' +
                    films.Search[i].Year + ' )<br><img src="' + films.Search[i].Poster + '" id="taille"></img></form></div>';
            }
        }

    }
}

function rechercherFilm() {
    document.getElementById('film').innerHTML = ' ';
    //Je récuperd la saisie dans l'input de recherche. 
    let nomFilm = document.getElementById('nomFilm').value;
    console.log(nomFilm);
    //Prépare la requête
    req.open("GET", "http://www.omdbapi.com/?apikey=c537c65c&s=" + nomFilm, true);
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
            //Affiche chaque film trouvé dans notre div 'film'
            for (let i = 0; i < films.Search.length; i++) {
                document.getElementById('film').innerHTML += '<div class="resultat"><form action="film.html" method="get"><button type="submit" name="info_film" value="' + films.Search[i].imdbID + '"class="btn-link">' + films.Search[i].Title + '</button> ( ' +
                    films.Search[i].Year + ' )<br><img src="' + films.Search[i].Poster + '" id="taille"></img></form></div>';
            }
        }
    }
}