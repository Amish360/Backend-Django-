import React from "react";
import '../css/card.css';
import { Link } from 'react-router-dom';

//function MovieCard(key,movie){
    function MovieCard(){    
    return(
        
        <Link to={`/movie/${id}`}>
        <div className="movie-card-container">
            <div className="movie-card-image-container">
                <img src="nwh.jpg" alt="Spiderman:No Way Home"/>
            </div>
            <div className="movie-card-details-container">
                <h2 classname="title">Spiderman: No Way Home</h2>
                <span classname="genre">Action , Adventure</span>
                <br/>
                <span classname="ratings">4.7</span>
                <br/>
                <span classname="year">2021</span>
            </div>
        </div>
        </Link>
        //<div classname="movie-card-container">
        //    <div classename="movie-card-image-container">
        //        <image/>
        //    </div>
        //    <div>
        //        <h2 classname="title">{movie.title}</h2>
        //        <title classname="genre">{movie.genre}</title>
        //        <title classname="ratings">{movie.rating}</title>
        //        <title classname="year">{movie.year}</title>
        //    </div>
        //</div>
        
    );
};


export default MovieCard;