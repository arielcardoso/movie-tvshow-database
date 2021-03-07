import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import axios from 'axios';
import Score from "../CatalogItems/Score";
import FavoriteButton from '../CatalogItems/FavoriteButton';
import MylistButton from '../CatalogItems/MylistButton';
import Comments from "../CatalogItems/Comments";

const MoviePage = (props) => {
  let { id } = useParams();
  const type = "movie";
  const [titleItem, setTitleItem] = useState();
  
  useEffect(async () => {
    const apiKey = '87dfa1c669eea853da609d4968d294be';
    let favorited = false;
    let added = false;

    await axios.get(`/api/catalog/favorite/movie/${id}`).then(res => {
      favorited = res.data.length? true : false;
    }, (error) => { console.log(error) });

    await axios.get(`/api/catalog/mylist/movie/${id}`).then(res => {
      added = res.data.length? true : false;
    }, (error) => { console.log(error) });

    await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos`)
    .then(async res => {
      if (res.data) {
        let item = res.data;
        item["favorited"] = favorited;
        item["added"] = added;
        item["type"] = "movie";
        item["image"] = `http://image.tmdb.org/t/p/original/${item.backdrop_path}`;
        item["poster"] = `http://image.tmdb.org/t/p/original/${item.poster_path}`;
        //console.log("Movie Item", item);
        setTitleItem(item);
      }
    });
  },[])

  return (
    <main>
      <div className="container">
        {titleItem &&  (
          <div className="row" style={{background: titleItem["image"] }} >
            <div className="col-4">
              <img src={titleItem["poster"]} className="rounded img-fluid" style={{maxWidth:'370px'}} />
            </div>
            <div className="col-8">
              <h1 className="mt-4">{titleItem["title"]} <span className="fw-normal small" >({ titleItem["release_date"].substr(0, 4) })</span></h1>
              <p>
                {titleItem["genres"].map((genre, index) => ( <span className="badge bg-danger me-2" key={index} >{genre.name}</span>)) }
              </p>
              <h4 className="mt-4">Sinopse</h4>
              <p className="text-white mt-3" >{titleItem["overview"]}</p>
              
              <div className="d-flex align-items-center">
                <Score score={titleItem["vote_average"]} />
                <span className="ms-2 text-white small">User Score</span>
                
                <div className="ms-5" style={{fontSize:'24px'}} >
                  <FavoriteButton data={titleItem} />
                </div>
                <div className="ms-3" style={{fontSize:'24px'}} >
                  <MylistButton data={titleItem} />
                </div>
              </div>

              <h4 className="mt-5">Comments</h4>
              <Comments id={id} type={type} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default MoviePage;