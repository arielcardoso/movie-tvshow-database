import React from 'react';

const TitleItem = (props) => {
		return (
        <div className="Item" style={{backgroundImage: 'url(' + props.title.backdrop + ')'}} >
            <div className="overlay">
                <div className="title">{props.title.title}</div>
                <div className="rating">{props.title.score} / 10</div>
                <div className="plot">{props.title.overview}</div>
            </div>
        </div>
		);
};

export default TitleItem