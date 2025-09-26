const movies = [
  { "id": 1, "title": "Inception", "year": 2010, "genre": ["Science Fiction", "Action"], "rating": 8.8, "poster": "https://m.media-amazon.com/images/I/81pZ7BPAS0L._AC_SY300_SX300_QL70_ML2_.jpg" },
  { "id": 2, "title": "The Godfather", "year": 1972, "genre": ["Drama"], "rating": 9.2, "poster": "https://m.media-amazon.com/images/I/71rzxJKqqgL._AC_SY300_SX300_QL70_ML2_.jpg" },
  { "id": 3, "title": "Interstellar", "year": 2014, "genre": ["Science Fiction", "Drama"], "rating": 8.6, "poster": "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg" },
  { "id": 4, "title": "The Dark Knight", "year": 2008, "genre": ["Action", "Drama"], "rating": 9.0, "poster": "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UY218_.jpg" },
  { "id": 5, "title": "Parasite", "year": 2019, "genre": ["Drama", "Fear"], "rating": 8.6, "poster": "https://m.media-amazon.com/images/I/91EUro56k+L._AC_UY218_.jpg" },
  { "id": 6, "title": "Avengers: Endgame", "year": 2019, "genre": ["Action", "Science Fiction"], "rating": 8.4, "poster": "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg" },
  { "id": 7, "title": "Spirited Away", "year": 2001, "genre": ["Adventure"], "rating": 8.6, "poster": "https://m.media-amazon.com/images/I/81ytDov1zRL._AC_UY218_.jpg" },
  { "id": 8, "title": "Fight Club", "year": 1999, "genre": ["Drama"], "rating": 8.8, "poster": "https://m.media-amazon.com/images/I/91pP-ocka5S._AC_UY218_.jpg" },
  { "id": 9, "title": "Forrest Gump", "year": 1994, "genre": ["Drama", "Romantic"], "rating": 8.8, "poster": "https://m.media-amazon.com/images/I/71MHBt7Ay1L._AC_UY218_.jpg" },
  { "id": 10, "title": "The Matrix", "year": 1999, "genre": ["Science Fiction", "Action"], "rating": 8.7, "poster": "https://m.media-amazon.com/images/I/51EG732BV3L.jpg" },
  { "id": 11, "title": "The Shawshank Redemption", "year": 1994, "genre": ["Drama"], "rating": 9.3, "poster": "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg" },
  { "id": 12, "title": "Gladiator", "year": 2000, "genre": ["Action", "Adventure"], "rating": 8.5, "poster": "https://m.media-amazon.com/images/I/81kyRpGiqgL._AC_UY218_.jpg" },
  { "id": 13, "title": "Titanic", "year": 1997, "genre": ["Romantic", "Drama"], "rating": 7.9, "poster": "https://m.media-amazon.com/images/I/91WV45e2hIL._AC_UY218_.jpg" },
  { "id": 14, "title": "Joker", "year": 2019, "genre": ["Drama", "Fear"], "rating": 8.4, "poster": "https://m.media-amazon.com/images/I/81ijwEtS7NL._AC_UY218_.jpg" },
  { "id": 15, "title": "The Lion King", "year": 1994, "genre": ["Adventure", "Comedy"], "rating": 8.5, "poster": "https://m.media-amazon.com/images/I/91OBD9PmUUL._AC_UY218_.jpg" }
];

const genreSelect = document.getElementById('genreSelect');
const searchButton = document.getElementById('searchButton');
const movieContainer = document.getElementById('movieContainer');

// Show all movies when the page first loads
document.addEventListener('DOMContentLoaded', () => {
    displayMovies(movies);
});

// Filter movies when the search button is clicked
searchButton.addEventListener('click', () => {
    const selectedGenre = genreSelect.value;
    
    // If “All Genres” is selected, all movies will be displayed.
    if (selectedGenre === 'All') {
        displayMovies(movies);
        return;
    }

    // Filter movies by selected genre
    const filteredMovies = movies.filter(movie => movie.genre.includes(selectedGenre));
    
    // Display filtered results on the screen
    displayMovies(filteredMovies);
});


function displayMovies(movieList) {
    
    movieContainer.innerHTML = '';

    if (movieList.length === 0) {
        movieContainer.innerHTML = '<p>No movies of this type were found.</p>';
        return;
    }

    // Create a card for each movie in the movie list
    movieList.forEach(movie => {
        // Create a div (card) for each movie
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card'; 

        // Create the movie poster
        const poster = document.createElement('img');
        poster.src = movie.poster;
        poster.alt = movie.title;

        // Create the movie title
        const title = document.createElement('h2');
        title.textContent = movie.title;

        // Create the movie year
        const year = document.createElement('p');
        year.textContent = `Year: ${movie.year}`;

        // Create the film rating
        const rating = document.createElement('p');
        rating.textContent = `Rating: ${movie.rating}`;

        movieCard.appendChild(poster);
        movieCard.appendChild(title);
        movieCard.appendChild(year);
        movieCard.appendChild(rating);

        movieContainer.appendChild(movieCard);
    });
}