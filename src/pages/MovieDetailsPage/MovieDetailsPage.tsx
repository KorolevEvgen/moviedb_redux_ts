import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {IMovieDetails} from "../../interfaces";
import {movieService} from "../../services";
import MovieDetailsCard from "../../components/MovieDetailsCard/MovieDetailsCard";

const MovieDetailsPage = () => {
    const [movie, setMovie] = useState<IMovieDetails>();
    let {id} = useParams<string>();

    useEffect(() => {
        if (id !== null) {
            movieService.getById(id).then(value => setMovie(value.data))
        }
    },[movie])


    return (
        <div>
            {movie && <MovieDetailsCard movie={movie}/>}

        </div>
    );
};

export default MovieDetailsPage;
