import React from 'react';

const TitleItem = (props) => {
    return (
        <div className="Item" style={{backgroundImage: 'url(' + props.title.backdrop + ')'}} >
            <div className="overlay">
                <div className="title">{props.title.name}</div>
                <div className="rating">{props.title.vote_average} / 10</div>
                {/* <div className="plot">{props.title.overview}</div> */}
            </div>
        </div>
    );
};

export default TitleItem