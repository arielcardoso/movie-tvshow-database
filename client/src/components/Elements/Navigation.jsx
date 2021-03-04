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
                    <li>Movies</li>
                    <li>TV Show</li>
                    <li>
                        <Link to="/mylist">My list</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Navigation;