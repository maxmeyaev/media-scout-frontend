import React from 'react'
import CocaineBear from '../images/cocaine-bear.jpg';

const Movies = () => {
    return (
        <div className="movies">
            <h2>Movies We Think You'll Love</h2>
            <div className="movies-cards">
                <div className="movie-card">
                    <img src={CocaineBear} alt="event" />
                </div>
                <div className="movie-card">
                    <img src={CocaineBear} alt="event" />
                </div>
                <div className="movie-card">
                    <img src={CocaineBear} alt="event" />
                </div>
            </div>
        </div>
    )
}

export default Movies