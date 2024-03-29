import React, {useState, useEffect} from 'react'
import axios from 'axios';
import TitleItem from '../CatalogItems/TitleItem'

const MyList = () => {
  const [listItems, setListItems] = useState();
  const [filter, setFilter] = useState("all");
  const [filteredItems, setFilteredItems] = useState(null);

  const toggleFilter = (e) => {
    const option = e.target.value;
    
    setFilter(option);

    if (option == 'all') {
      setFilteredItems(listItems);
    } else {
      console.log("Filter", option);
      const newlist = listItems.filter(item => item.type == option);
      console.log("Filtered List", newlist);
      setFilteredItems(newlist);
    }
  }

  useEffect(async () => {
    let favoritedItems = [];
    let myListItems = [];

    await axios.get(`/api/catalog/favorite`).then(res => {
      favoritedItems = res.data;
    }, (error) => { console.log('Error getting all favorite', error) });
    //console.log("Favorited items", favoritedItems);

    await axios.get(`/api/catalog/mylist`).then(res => {
      myListItems = res.data;
    }, (error) => { console.log('Error getting all mylist titles', error) });
    //console.log("My List items", myListItems);

    await myListItems.map((item) => {

      if (favoritedItems.filter(fav => fav.id == item.id & fav.type == item.type).length > 0){
        item["favorited"] = true;
      } else {
        item["favorited"] = false;
      }

      item["added"] = true;
      item["type"] = item.type;
    });

    console.log("Final list", myListItems);
    setListItems(myListItems);
    setFilteredItems(myListItems);
    setFilter('all')
  }, [])

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="d-flex justify-content-between align-items-center">
              MY LIST
              <span>
                <button value='all' onClick={toggleFilter} className={(filter && filter == "all")? "btn btn-danger" : "btn btn-dark bg-transparent" } >ALL</button>
                <button value='movie' onClick={toggleFilter} className={(filter && filter == "movie")? "btn btn-danger ms-2" : "btn btn-dark bg-transparent ms-2" } >MOVIES</button>
                <button value='tvshow' onClick={toggleFilter} className={(filter && filter == "tvshow")? "btn btn-danger ms-2" : "btn btn-dark bg-transparent ms-2" } >TV SHOW</button>
              </span>
            </h2>
          </div>
          {filteredItems && 
            filteredItems.map((data, index) => (
              <div className="col-12 col-sm-6 col-md-3 my-3" key={index} >
                <TitleItem data={data} key={index}  />
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default MyList