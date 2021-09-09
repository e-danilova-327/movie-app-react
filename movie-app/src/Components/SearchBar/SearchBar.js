import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <>
            <header className="container-fluid bg-dark d-flex align-items-center">
                <a href="#!" className="text-decoration-none">
                    <h1 className="text-white fw-bold">Movies</h1>
                </a>
                <form>
                    <input
                        className="rounded-pill px-2 mx-4 form-control"
                        type="text"
                        placeholder="Search..."
                    />
                </form>
            </header>
        </>
    );
};

export default SearchBar;
