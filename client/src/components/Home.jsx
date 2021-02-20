import React from 'react'
import {Link} from 'react-router-dom'

import TitleList from './TitleList'

const Home = () => {
    return (
        <>
            <h1>Home Logged</h1>
            <TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1' />
            {/* <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
            <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
            <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
            <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' /> */}
        </>
    )
}

export default Home