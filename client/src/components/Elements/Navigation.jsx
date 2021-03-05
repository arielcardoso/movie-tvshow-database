import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div id="navigation" className="navigation">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/tvshow">TV Show</Link>
                    </li>
                    <li>
                        <Link to="/mylist">My List</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Navigation;