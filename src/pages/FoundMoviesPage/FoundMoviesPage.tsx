import React, {FC, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";

import {getAllSearchMovies} from "../../store";
import {useAppDispatch, useAppSelector} from "../../hooks";
import MovieCard from "../../components/MovieCard/MovieCard";
import './FoundMoviesPage.css'


const FoundMoviesPage: FC = () => {
    const {search} = useLocation();
    const query = new URLSearchParams(search)
    const queryString = query.get('q')

    const {foundMovies} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();


    useEffect(() => {
        if (queryString !== null) {
             dispatch(getAllSearchMovies({query: queryString}))
        }
    }, [])

    return (
        <div className={'foundMoviesPage'}>
            {foundMovies.map(movie =>
                <Link to={movie.id.toString()}>
                    <MovieCard key={movie.id} movie={movie}/>
                </Link>
            )}

        </div>
    );
};

export default FoundMoviesPage;
