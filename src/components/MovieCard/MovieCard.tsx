import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import PosterPreview from "../PosterPreview/PosterPreview";
import {posterSmallSize} from "../../constants";
import GenresPreview from "../GenresPreview/GenresPreview";
import './MovieCard.css'


const MovieCard: FC<{ movie: IMovie }> = ({movie}) => {

    const {id, title, genre_ids, poster_path, vote_average} = movie


    return (
        <div className={'card'}>
                <PosterPreview poster_path={poster_path} size={posterSmallSize} title={title}/>
                <p className={'card-title card-text'}>{title}</p>
                <p className={'card-text'}>
                    <GenresPreview genre_ids={genre_ids}/>
                </p>
                <p className={'card-vote'}>{vote_average}</p>
        </div>
    );
};

export default MovieCard;
