import React, {FC, useState} from 'react';
import {NavLink} from "react-router-dom";
import {RatingStar} from "rating-star";

import {IMovieDetails} from "../../interfaces";
import PosterPreview from "../PosterPreview/PosterPreview";
import {posterLargeSize} from "../../constants";
import backArrow from '../../images/backArrowBlue.png'
import './MovieDetailsCard.css'


const MovieDetailsCard: FC<{ movie: IMovieDetails }> = ({movie}) => {
    const {title, tagline, overview, poster_path, vote_average, genres} = movie


    return (
        <div className={'movieDetails-wrapper'}>
           <div className={'movieDetails-back'} >
               <NavLink to={'/movies'}><img className={'movieDetails-backArrow'} src={backArrow} alt=""/></NavLink>
           </div>
            <div className={'movieDetails-movie-detail'}>
               <div className={'card-image'}>
                   <PosterPreview poster_path={poster_path} size={posterLargeSize} title={title}/>
               </div>
                <div className={'movieDetails-description'}>
                <p className={'description-title'}> {title}</p>
                    <p className={'description-tagline'}>"{tagline}"</p>
                <p className={'description-genres'}>{genres.map(genre => <span key={genre.id}>{genre.name} </span>)}</p>
                <p className={'description-overview'}> {overview}</p>
                <p className={'description-ratingStar'}><RatingStar id="" maxScore={10} rating={vote_average}/></p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsCard;
