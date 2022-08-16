import {IMovie} from "./movie.interface";

export interface IMoviePage {
    page: number;
    results: [IMovie];
    total_pages: number;

}
