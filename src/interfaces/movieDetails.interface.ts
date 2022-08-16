export interface IMovieDetails{
    id: number | string;
    title: string;
    tagline: string;
    overview: string;
    poster_path: string;
    vote_average:number;
    genres: [ {
        id: number;
        name: string;
    }]
}
