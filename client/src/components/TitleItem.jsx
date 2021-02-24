import React from 'react';

const TitleItem = (props) => {
    return (
        <div className="Item" style={{backgroundImage: 'url(http://image.tmdb.org/t/p/original' + props.title.backdrop_path + ')'}} >
            <div className="overlay">
                <div className="title">{props.title.title}</div>
                <div className="rating">{props.title.vote_average} / 10</div>
            </div>
        </div>
    );
};

export default TitleItem