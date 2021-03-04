import React from 'react'
import TitleList from '../CatalogItems/TitleList'

const homeLists = [
    {
        name: "Trending now",
        url: "trending/all/day?page=1"
    },
    {
        name: "Playing now",
        url: "movie/now_playing?page=1"
    },
    {
        name: "On air",
        url: "/tv/on_the_air?page=1"
    },
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