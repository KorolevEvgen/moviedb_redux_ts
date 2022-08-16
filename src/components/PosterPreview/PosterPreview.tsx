import React, {FC} from 'react';

import {postURL} from "../../constants";

const PosterPreview: FC<{
    poster_path: string,
    size: number,
    title: string
}> = ({poster_path, size, title}) => {

    return (
        <div>
            <img src={`${postURL}${size}${poster_path}`} alt={`${title}`}/>
        </div>
    );
};

export default PosterPreview;
