import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Button from 'react-bootstrap/Button';


function MovieList() {

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedMovies = staticMovieData.slice(startIndex, endIndex);

    setMovies(slicedMovies);
    setTotalPages(Math.ceil(staticMovieData.length / itemsPerPage));
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h1>Movies List</h1>
      
      <div className="movie-list">
        <MovieCard/>
      </div>
      
      <div className="pagination">
        <Button variant='primary'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button variant='primary'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default MovieList;

//<Button variant="primary" >Home</Button>

/*
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      */