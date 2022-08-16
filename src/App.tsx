import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import FoundMoviesPage from "./pages/FoundMoviesPage/FoundMoviesPage";
import './App.css'

const App: FC = () => {
    return (
        <div>
            <Header/>

            <Routes>
                <Route path={''} element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
                <Route path={'/movies/search'} element={<FoundMoviesPage/>}/>
                <Route path={'movies/search/:id'} element={<MovieDetailsPage/>}/>
            </Routes>

        </div>
    );
};

export default App;
