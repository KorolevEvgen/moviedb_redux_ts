import React, {FC} from 'react';

import {useAppSelector} from "../../hooks";
import './GenresPreview.css'


const GenresPreview: FC<{ genre_ids: [number] }> = ({genre_ids}) => {
    const {genres} = useAppSelector(state => state.genres)

    const mappedGenres = genres.filter(element => genre_ids.some(item => item === element.id))

    return (
        <div className={'card-genres'}>
            {mappedGenres && mappedGenres.map(item => <span key={item.id}>{item.name}, </span>)}
        </div>
    );
};

export default GenresPreview;
