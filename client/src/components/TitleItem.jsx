import React from 'react';

const TitleItem = (props) => {
    return (
        <div className="Item" id={"title-"+props.data.id} style={{backgroundImage: 'url(http://image.tmdb.org/t/p/original' + props.data.backdrop_path + ')'}} >
            <div className="overlay">
                <div className="title">{props.data.title}</div>
                <div className="rating">{props.data.vote_average} / 10</div>
            </div>
        </div>
    );
};

export default TitleItem