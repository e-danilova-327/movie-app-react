import React from 'react';
import './MovieList.css';
import Movie from '../Movie/Movie';

const MovieList = ({ movies }) => {
    return (
        <div className="listBody">
            <Movie movies={movies} />
        </div>
    );
};

export default MovieList;
