import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IGenre} from "../../interfaces";
import {genreService} from "../../services";

interface IGenreState {
    genres: IGenre[],
    update: IGenre | null
}

const initialState: IGenreState = {
    genres: [],
    update: null
}

export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_,{dispatch})=>{
        const {data} = await genreService.getAll()
        dispatch(setGenres({genres:data}))
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        setGenres: (state, action: PayloadAction<{ genres: any }>) => {
            state.genres = action.payload.genres.genres
        }
    }
})

const genresReducer = genresSlice.reducer;

export default genresReducer;
export const {setGenres} = genresSlice.actions
