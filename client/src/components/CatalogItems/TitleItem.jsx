import React, {useState, useEffect} from 'react';
import FavoriteButton from './FavoriteButton'
import MylistButton from './MylistButton'

const TitleItem = (props) => {

    const titleId = props.data.id;
    const titleType = props.data.title? "movie" : "tvshow";

    return (
        <div className="Item" id={"title-"+props.data.id} >
            <img src={'http://image.tmdb.org/t/p/original' + props.data.backdrop_path} alt={props.data.title} />
            <div className="overlay">
                <div className="title">{props.data.title}</div>
                <div className="rating">Rating {props.data.vote_average}</div>
                <FavoriteButton data={props.data} />
                <MylistButton data={props.data} />
            </div>
        </div>
    );
};

export default TitleItem;
