import React from "react";
import { useParams } from 'react-router-dom';

function MovieDetails(){
    const { id } = useParams();
    return(
        <section>
        <div>
            <h2>ID:{id}</h2>
        </div>

        <div className="Details-image-Container">
            <img src="" alt=""/>
        </div>
        
        
        <div className="Details-info-Container">
            <h1>{title}</h1>
            <span>{genre}</span>
        </div>

        <div className="Details-info-Container">
            <h1>STORY:</h1>
            <p>{summary}</p>
        </div>

        <div className="Details-info-Container">
            <h1>Details:</h1>
            <p>{year}</p>
            <p>{runtime}</p>
        </div>



        </section>
    
    );
}



export default MovieDetails;