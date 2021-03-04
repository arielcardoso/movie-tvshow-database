import React from 'react'
import TitleList from '../CatalogItems/TitleList'

const tvshowLists = [
  // {
  //   name: "Popular",
  //   url: "tv/popular?sort_by=popularity.desc&page=1"
  // },
  {
    name: "Action & Adventure",
    url: "discover/tv?sort_by=popularity.desc&with_genres=10759"
  },
  {
    name: "Comedy",
    url: "discover/tv?sort_by=popularity.desc&with_genres=35"
  },
  {
    name: "Crime",
    url: "discover/tv?sort_by=popularity.desc&with_genres=80"
  },
  {
    name: "Sci-Fi & Fantasy",
    url: "discover/tv?sort_by=popularity.desc&with_genres=10765"
  },
  {
    name: "Animation",
    url: "discover/tv?sort_by=popularity.desc&with_genres=16"
  },
  {
    name: "Family",
    url: "discover/tv?sort_by=popularity.desc&with_genres=10751"
  },
];

const TvShow = () => {
  return (
    <main>
      <div className="container">
        <h2>TV SHOW</h2>
      </div>
      {tvshowLists.map((data, index) => (
          <TitleList list={data} key={index} />
      ))}
    </main>
  )
}

export default TvShow;