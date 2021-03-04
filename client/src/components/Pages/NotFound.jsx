import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <main>
            <div className="container text-center">
                <h1>404 - Page Not Found!</h1>
                <Link to="/" >Return to Home</Link>
            </div>
        </main>
    )
}

export default NotFound;