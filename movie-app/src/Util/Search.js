const apiUrl =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=26';
const imgPath = 'https://image.tmdb.org/t/p/w1280';
const searchApi =
    'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const displayMovies = (url) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const movies = data.results;
        })
        .catch((error) => console.log(error));
};

const searchMovies = (searchTerm) => {
    fetch(searchApi + searchTerm)
        .then((response) => response.json())
        .then((data) => {
            const movies = data.results;
            console.log(movies);
        })
        .catch((error) => console.log(error));
};
