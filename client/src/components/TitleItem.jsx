import React from 'react';

const TitleItem = (props) => {
    return (
        <div className="Item" id={"title-"+props.data.id} >
            <img src={'http://image.tmdb.org/t/p/original' + props.data.backdrop_path} alt={props.data.title} />
            <div className="overlay">
                <div className="title">{props.data.title}</div>
                <div className="rating">Rating {props.data.vote_average}</div>
                <div className="icon-button like" title="I like it"><i className="bi bi-heart"></i></div>
                <div className="icon-button mylist" title="Add to my list"><i className="bi bi-list-check"></i></div>
                <div className="seasons">2 Temporadas</div>
            </div>
        </div>
    );
};

export default TitleItem