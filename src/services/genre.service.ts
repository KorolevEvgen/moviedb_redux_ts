import {axiosService} from "./axios.service";
import {IGenre} from "../interfaces";
import {apiKey, urls} from "../constants";

export const genreService = {
    getAll:()=> axiosService.get<IGenre[]>(`${urls.genres}?api_key=${apiKey}`)
}
