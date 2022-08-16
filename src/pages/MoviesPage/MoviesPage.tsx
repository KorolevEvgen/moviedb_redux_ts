import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllGenres, getAllMovies} from "../../store";
import MovieCard from "../../components/MovieCard/MovieCard";
import Pagination from "../../components/Pagination/Pagination";
import {Link} from "react-router-dom";
import './MoviesPage.css'



const MoviesPage: FC = () => {
    const {movies, totalPages, currentPage} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()
    const page = 1;

    useEffect(() => {
        dispatch(getAllMovies({page}))
        dispatch(getAllGenres())
    }, [])


    return (
        <div className={'moviesPage'}>

            {movies.map(movie =>
                <Link to={movie.id.toString()}>
                <MovieCard key={movie.id} movie={movie}/>
                </Link>
            )}
            <Pagination currentPage={currentPage} totalMoviesPage={totalPages} pageChange={getAllMovies}/>
        </div>
    );
};

export default MoviesPage;
