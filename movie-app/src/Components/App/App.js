import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import MovieList from '../MovieList/MovieList';

function App() {
    const [results, setResults] = useState([]);
    const fetchMovies = () => {
        axios
            .get(
                'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=27'
            )
            .then((res) => {
                setResults(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    fetchMovies();

    return (
        <div>
            <SearchBar />
            <MovieList movies={results} />
        </div>
    );
}

export default App;
