import React from 'react';
import FavoriteButton from './FavoriteButton'
import MylistButton from './MylistButton'
import { Link } from 'react-router-dom'

const TitleItem = (props) => {
    return (
        <div className="Item" id={"title-"+props.data.id} >
            <img src={props.data.image} alt={props.data.title} />
            <Link to={`/${props.data.type}/${props.data.id}`} className="overlay">
                <div className="title">{props.data.title}</div>
                {props.data.vote_average != 0 &&
                    (<div className="rating">Rating {props.data.vote_average}</div>)
                }
                <FavoriteButton data={props.data} />
                <MylistButton data={props.data} />
            </Link>
        </div>
    );
};

export default TitleItem;
