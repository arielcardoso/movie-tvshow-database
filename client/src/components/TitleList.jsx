import React, { useState, useEffect } from "react";
import axios from 'axios';
import TitleItem from './TitleItem'

const TitleList = (props) => {
  const [listItems, setListItems] = useState();
  const apiKey = '87dfa1c669eea853da609d4968d294be';

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${props.list.url}&api_key=${apiKey}`)
      .then(res => {
        setListItems(res.data.results);
      })
  }, [listItems]);

  return (
    <>
      <div className="container">
        <h2>{props.list.name}</h2>
      </div>
      <div className="titles-wrapper">
        {listItems &&
          listItems.map((data, index) => (
            <TitleItem data={data} key={index}  />
          ))
        }
      </div>
    </>
  );
}

export default TitleList;