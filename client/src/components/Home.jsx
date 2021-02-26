import React from 'react'
import TitleList from './TitleList'

const homeLists = [
    {
        id: 1,
        name: "Trending now",
        url: "discover/movie?sort_by=popularity.desc&page=1"
    },
    {
        id: 2,
        name: "Horror",
        url: "genre/27/movies?sort_by=popularity.desc&page=1"
    },
    {
        id: 3,
        name: "Sci-Fi",
        url: "genre/878/movies?sort_by=popularity.desc&page=1"
    },
    {
        id: 4,
        name: "Comedy",
        url: "genre/35/movies?sort_by=popularity.desc&page=1"
    }
];

const Home = () => {
    return (
        <main>
            {homeLists.map((data, index) => (
                <TitleList list={data} key={index} />
            ))}
        </main>
    )
}

export default Home