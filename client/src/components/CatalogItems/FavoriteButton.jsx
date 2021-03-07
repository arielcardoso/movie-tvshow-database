import React, {useState, useEffect} from 'react';
import axios from 'axios';

const FavoriteButton = (props) => {
  const [favorited, setFavorite] = useState(props.data.favorited);

  const toggleFavorite = (e) => {
    e.preventDefault();
    if (favorited) {
      axios.delete(`/api/catalog/favorite/${props.data.type}/${props.data.id}`)
      .then(res => {
        setFavorite(!favorited);
        //console.log(`Title ${props.data.id} removed from favorites!`);
      }, (error) => { console.log(error) });
    } else {
      setFavorite(true);
      axios.post(`/api/catalog/favorite/${props.data.type}/${props.data.id}`)
      .then(res => {
        //console.log(`Title ${props.data.id} added to favorites!`);
      }, (error) => { console.log(error) });
    }
  }

  return (
    <div onClick={toggleFavorite} className="icon-button like" >
      {favorited 
          ? <i className="bi bi-heart-fill filled" title="I liked" ></i>
          : <i className="bi bi-heart" title={"I like it"} ></i>
      }
    </div>
  );
};

export default FavoriteButton;