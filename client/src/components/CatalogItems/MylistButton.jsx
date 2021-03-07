import React, {useState, useEffect} from 'react';
import axios from 'axios';

const MylistButton = (props) => {
  const [added, setAdded] = useState(props.data.added);
  
  const toggleMylist = (e) => {
    e.preventDefault();
    if (added == true) {
      axios.delete(`/api/catalog/mylist/${props.data.type}/${props.data.id}`)
      .then(res => {
        setAdded(!added);
        //console.log(`Title ${props.data.id} removed from my list!`);
      }, (error) => { console.log(error) });
    } else {
      const objParams = {
        title: props.data.title,
        image: props.data.image,
        vote_average: props.data.vote_average,
        release_date: props.data.release_date? props.data.release_date : props.data.first_air_date
      };
      setAdded(true);
      axios.post(`/api/catalog/mylist/${props.data.type}/${props.data.id}`, objParams)
      .then(res => {
        //console.log(`Title ${props.data.id} added to my list!`);
      }, (error) => { console.log(error) });
      
    }
  }

  return (
    <div onClick={toggleMylist} className="icon-button mylist">
      {added
        ? <i className="bi-check-circle-fill filled" title="Added in my list" ></i>
        : <i className="bi bi-list-check" title="Add to my list" ></i>
      }
    </div>
  );
}

export default MylistButton;