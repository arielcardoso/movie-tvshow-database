import React, {useState, useEffect} from 'react'
import axios from 'axios';
import TitleItem from '../CatalogItems/TitleItem'

const Search = () => {
  const [listItems, setListItems] = useState([]);
  const [keyword, setKeyword] = useState("");
  const apiKey = process.env.REACT_APP_TMDB_KEY;

  const handleChange = (e) => {
    setKeyword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (keyword.length > 2) {
      axios.get(`https://api.themoviedb.org/3/search/multi?query=${keyword}&api_key=${apiKey}`)
      .then(res => {
        let list = [];
        res.data.results.map((item) => {
          if (
            (item.media_type == 'movie' || item.media_type == 'tv') && 
            (item.backdrop_path != null)
            ) {
            item["type"] = item.media_type == 'movie'? 'movie' : 'tvshow';
            item["title"] = item.title? item.title : item.name;
            item["image"] = `http://image.tmdb.org/t/p/original/${item.backdrop_path}`;
            list.push(item);
          }
        });
        setListItems(list);
      }).catch((error) => {
        if (error.response) { // if there is response, it means its not a 50x, but 4xx
          console.log('Error getting TMDB search', error.response)
        } else {   // gets activated on 50x errors, since no response from server
          console.log('Error getting TMDB search', error)
        } 
      });

    } 
  }

  return (
    <main>
      <div className="container">
        <h2>SEARCH</h2>
        <p className="lead" >Millions of movies, TV shows and people to discover. Explore now.</p>
        <form className="col-12">
          <div className="form-floating mb-3">
            <input onChange={handleChange} type="text" className="form-control" placeholder="Search for movies and tv show" />
            <label>Search for a title name...</label>
            <button onClick={handleSubmit} className={keyword.length > 2? "btn btn-danger btn-search" : "btn btn-danger btn-search disabled"} type="submit" >
              <i className="bi bi-search" ></i> Search
            </button>
          </div>
        </form>
      </div>
      <hr/>
      <div className="container">
        <div className="row">
          {listItems
            ?(
              listItems.length
              ? (
                listItems.map((data, index) => (
                <div className="col-12 col-sm-6 col-md-3 my-3" key={index} >
                  <TitleItem data={data} key={index}  />
                </div>
              ))
              ) : (
                <div className="col-12 text-center pt-5">
                  No titles found.
                </div> 
              )
            ) : (
              <div className="col-12 text-center pt-5">
                Loading titles...
              </div>
            )
          }
        </div>
      </div>
    </main>
  )
}

export default Search;