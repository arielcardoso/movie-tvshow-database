import React from 'react'
import TitleList from '../CatalogItems/TitleList'

const movieLists = [
  // {
  //   name: "Top Rated",
  //   url: "/movie/top_rated?language=en-US&page=1"
  // },
  // {
  //   name: "Popular",
  //   url: "discover/movie?sort_by=popularity.desc&page=1"
  // },
  {
    name: "Action",
    url: "genre/28/movies?sort_by=popularity.desc&page=1"
  },
  {
    name: "Sci-Fi",
    url: "genre/878/movies?sort_by=popularity.desc&page=1"
  },
  {
    name: "Horror",
    url: "genre/27/movies?sort_by=popularity.desc&page=1"
  },
  {
    name: "Romance",
    url: "genre/10749/movies?sort_by=popularity.desc&page=1"
  },
  {
    name: "Animation",
    url: "genre/16/movies?sort_by=popularity.desc&page=1"
  }
];

const Movies = () => {
  return (
    <main>
      <div className="container">
        <h2>MOVIES</h2>
      </div>
      {movieLists.map((data, index) => (
          <TitleList list={data} key={index} />
      ))}
    </main>
  )
}

export default Movies