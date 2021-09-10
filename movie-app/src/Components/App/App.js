import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import MovieList from '../MovieList/MovieList';


function App() {
    const [results, setResults] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`);
            setResults(result.data.results);
        }
        fetchData();

    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchData = async () => {
            const result = await axios(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${searchTerm}`);
            setSearchResults(result.data.results);
        }
        fetchData();
        console.log(searchResults);
    }

    
    if (searchTerm === '') {
        return (<div>
            <SearchBar handleSearch={handleSearch} handleSubmit={handleSubmit} />
            <MovieList  movies={results}  />
        </div>)
    } else {
        return (<div>
            <SearchBar handleSearch={handleSearch} handleSubmit={handleSubmit} />
            <MovieList  movies={searchResults}  />
        </div>)}

    
}

export default App;
