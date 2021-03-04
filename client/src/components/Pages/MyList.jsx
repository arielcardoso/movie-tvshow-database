import React, {useState, useEffect} from 'react'
import axios from 'axios';
import TitleItem from '../CatalogItems/TitleItem'

const MyList = () => {
  const [listItems, setListItems] = useState();

  useEffect(async () => {
    let favoritedItems = [];
    let myListItems = [];

    await axios.get(`/api/catalog/favorite`).then(res => {
      favoritedItems = res.data;
    }, (error) => { console.log(error) });
    //console.log("Favorited items", favoritedItems);

    await axios.get(`/api/catalog/mylist`).then(res => {
      myListItems = res.data;
    }, (error) => { console.log(error) });
    //console.log("My List items", myListItems);

    await myListItems.map((item) => {

      if (favoritedItems.filter(fav => fav.id == item.id & fav.type[0] == item.type[0]).length > 0){
        item["mtsdb_favorited"] = true;
      } else {
        item["mtsdb_favorited"] = false;
      }

      item["mtsdb_added_mylist"] = true;
      item["mtsdb_type"] = item.type;
    });

    console.log("Final list", myListItems);
    setListItems(myListItems);
  }, [])

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>My list</h2>
          </div>
          {listItems && 
            listItems.map((data, index) => (
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