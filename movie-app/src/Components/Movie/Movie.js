import React from 'react';
import './Movie.css';

const Movie = ({ movies }) => {
    const imgPath = 'https://image.tmdb.org/t/p/w1280';

    return (
        <>
            {movies.map((movie) => (
                <div className="movie">
                    <img src={`${imgPath}${movie.poster_path}`} alt=""></img>
                    <h3>{movie.title}</h3>
                </div>
            ))}
        </>
    );
};

export default Movie;
