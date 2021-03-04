import React, { useState, useEffect } from "react";
import axios from 'axios';
import TitleItem from './TitleItem'

const TitleList = (props) => {
  const [listItems, setListItems] = useState();

  useEffect(async () => {

    let finalList = [];
    let favoritedItems = [];
    let myListItems = [];
    const apiKey = '87dfa1c669eea853da609d4968d294be';

    await axios.get(`/api/catalog/favorite`).then(res => {
      favoritedItems = res.data;
    }, (error) => { console.log(error) });
    //console.log("Favorited items", favoritedItems);

    await axios.get(`/api/catalog/mylist`).then(res => {
      myListItems = res.data;
    }, (error) => { console.log(error) });
    //console.log("My List items", myListItems);

    await axios.get(`https://api.themoviedb.org/3/${props.list.url}&api_key=${apiKey}`)
    .then(async res => {

      res.data.results.map((item)=>{
        const itemType = item.title? "movie" : "tvshow";

        if (favoritedItems.filter(fav => fav.id == item.id & fav.type[0] == itemType).length > 0){
          item["mtsdb_favorited"] = true;
        } else {
          item["mtsdb_favorited"] = false;
        }

        if (myListItems.filter(mylist => (mylist.id == item.id & mylist.type == itemType)).length > 0){
          item["mtsdb_added_mylist"] = true;
        } else {
          item["mtsdb_added_mylist"] = false;
        }

        item["mtsdb_type"] = item.title? "movie" : "tvshow";

        item["image"] = `http://image.tmdb.org/t/p/original/${item.backdrop_path}`;

        finalList.push(item);
      })
    })
    //console.log("Final List", finalList);
    setListItems(finalList);
  },[])
  
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