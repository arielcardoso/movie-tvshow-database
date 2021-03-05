import React, {useState, useEffect} from 'react';
import '../../style/Score.scss';

const Score = (props) => {
  const percent = props.score * 10;

  const cssLeftSide = {
    transform: `rotate(${percent * 3.6}deg)`,
    
  }
  
  let cssRightSide;
  let cssPie;

  if (percent <= 50) {
    cssRightSide = {
      display: 'none',
      transform: `none`,
    }
  } else {
    cssPie = { clip: `rect(auto, auto, auto, auto)` }
    cssRightSide = {
      transform: `rotate(180deg)`,
    }
  }

  return (
    <>
      <div className={`pie-wrapper style-2`}>
        <span className="label">{props.score}</span>
        <div className='pie' style={cssPie} >
          <div className='left-side half-circle' style={cssLeftSide} ></div>
          <div className='right-side half-circle' style={cssRightSide} ></div>
        </div>
        <div className="shadow"></div>
      </div>
    </>
  );
}

export default Score;