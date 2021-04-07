
//convert titles of movie to lowercase
const convertToLowerCase = (item) => {
    const temporary = item.Title.toLowerCase();
    item.Title = temporary;
    return item;
}

//add url to object movie 
const addLinkToMovieObject = (item) => {
    const imdbLinkPartA = "https://www.imdb.com/title/";
    const imdbLinkPartB = item.imdbID;
    item.link = imdbLinkPartA.concat(imdbLinkPartB);
}

//map movieselection as list-item and bind .poster to .src attribute and output to screen
const getSelectedMoviesToHtml = (selectedMovies) => selectedMovies.map(createMovieListItem);

// create new list-item and new image,link image to poster-attribute of the movie and place in the DOM and output to screen
const createMovieListItem = (movie) => {
    let movieListItem = document.createElement("li");
    movieListItem.classList.add("imagelist__item");
    let movieImage = document.createElement("img");
    movieImage.classList.add("imagelist__poster")
    let movieLink = document.createElement("a");
    movieLink.classList.add("image__link")
    movieImage.setAttribute("src", movie.Poster);
    movieLink.setAttribute("href", movie.link);
    movieLink.setAttribute("target", "_blank");
    document.getElementById("filteredMovies").appendChild(movieListItem).appendChild(movieLink).appendChild(movieImage);
}

//filters the movies based on the event.target.name of the specific radiobutton-value
const filterMovies = (hero) => {
    const heroMovies = convertMovies.filter(item => item.Title.includes(hero));
    return heroMovies;
}

//filter latest movies, functions merely correct
const filterLatestMovies = () => {
    let heroMovies = convertMovies.filter(item => parseInt(item.Year) >= 2014);
    return heroMovies;
}

//remove selected movies on screen,needed before new input can be shown
const removeContent = () => document.getElementById("filteredMovies").innerHTML = "";

//add eventlisteners to radiobuttons
const listenerToRadio = (selectRadioButtons) => selectRadioButtons.forEach(item => item.addEventListener("change", handleOnChangeEvent));

// callbackfunction for the eventlisteners, check value of the specific radiobuttons
const handleOnChangeEvent = (event) => {
    removeContent();
    switch (event.target.value) {
        case "batman":
            getSelectedMoviesToHtml(filterMovies(event.target.value));
            break;
        case "avenger":
            getSelectedMoviesToHtml(filterMovies(event.target.value));
            break;
        case "x-men":
            getSelectedMoviesToHtml(filterMovies(event.target.value));
            break;
        case "princess":
            getSelectedMoviesToHtml(filterMovies(event.target.value));
            break;
        case "2014orlater":
            getSelectedMoviesToHtml(filterLatestMovies());
            break;
    }
}

//program starts here------------------------------------------------------------------------------------------------------------------------


//convert original movie objects.title to lowercase and add item.link as new attribute, so it will be executed once 
convertMovies = movies.map(convertToLowerCase);
convertMovies.forEach(addLinkToMovieObject);
//shows all movies by default when page loads
getSelectedMoviesToHtml(convertMovies);
listenerToRadio(document.querySelectorAll('input[name="moviefilter"]'));






