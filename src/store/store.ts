import {combineReducers, configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./slices/movie.slice";
import genresReducer from "./slices/genre.slice";

const rootReducer = combineReducers({
    movies: moviesReducer,
    genres: genresReducer
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
