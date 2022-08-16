import {axiosService} from "./axios.service";

import {apiKey, urls} from "../constants";

export const movieService = {
    getAll: (page: number) => axiosService.get<any[]>(`${urls.movie}?page=${page}&api_key=${apiKey}`),
    getById: (id: string | undefined) => axiosService.get(`${urls.movieById}/${id}?api_key=${apiKey}`),
    getSearch: (query: string) => axiosService.get(`${urls.search}?api_key=${apiKey}&query=${query}`)
}
