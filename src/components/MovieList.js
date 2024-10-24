import { useState, useEffect } from 'react';
import styles from './MovieList.module.css'; // Import the CSS module

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const url = 'https://imdb8.p.rapidapi.com/v2/search?searchTerm=marvel&first=1&country=US&language=en-US'; // Updated URL
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '7b676f3700msh1ec6158caac1fecp18daefjsnd220dc4c14a0', // Your API key
                    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`); // Check for successful response
                }
                const result = await response.json(); // Parse response as JSON
                console.log(result);
                // Extract movies from the new response structure
                const moviesList = result.data.searchResults || [];
                setMovies(moviesList); // Set the movies state
            } catch (error) {
                console.error('Error fetching movies:', error); // Descriptive error message
            }
        };

        fetchMovies();
    }, []); // Empty dependency array ensures this runs once on component mount

    return (
        <div className={styles.gridContainer}>
            {movies.length > 0 ? ( // Check if movies array has items
                movies.map((movie, index) => (
                    <div key={index} className={styles.movieCard}>
                        <img src={movie.primaryImage.url} alt="Movie poster" className={styles.moviePoster} />
                        <h4>{movie.titleText.text}</h4> {/* Title of the movie */}
                        <p>{movie.releaseYear ? movie.releaseYear.year : 'Unknown Year'}</p> {/* Release year or fallback */}
                    </div>
                ))
            ) : (
                <p>No movies found.</p> // Display a message if no movies are returned
            )}
        </div>
    );
};

export default MovieList;
