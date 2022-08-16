import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie, IMoviePage} from "../../interfaces";
import {movieService} from "../../services";




interface IMovieState {
    movies: IMovie[],
    update: IMovie | null,
    currentPage: number,
    totalPages: number,
    foundMovies: IMovie[],
}

const initialState: IMovieState = {
    movies: [],
    update: null,
    currentPage: 1,
    totalPages: 0,
    foundMovies: [],
}

export const getAllMovies = createAsyncThunk<void, {page: number}>(
    'moviesSlice/getAllMovie',
    async ({page},{dispatch}) =>{
        const result = await movieService.getAll(page);
        const data = result.data as unknown as IMoviePage;
        dispatch(setMovies({movies: data }))
    }
)

export const getAllSearchMovies = createAsyncThunk<void,{query:string}>(
    'moviesSlice/getAllSearchMovies',
    async ({query},{dispatch})=>{
        const result = await movieService.getSearch(query)
        const data = result.data
        dispatch(setSearchMovies({foundMovies:data}))
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<{ movies: IMoviePage }>) => {
            state.movies = action.payload.movies.results
            state.currentPage = action.payload.movies.page;
            state.totalPages = action.payload.movies.total_pages
        },
        setSearchMovies: (state,action:PayloadAction<{foundMovies:IMoviePage}>)=>{
            state.foundMovies = action.payload.foundMovies.results
        }
    }
})

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;
export const {setMovies,setSearchMovies} = moviesSlice.actions;
