import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState';
import MovieCard from "./MovieCard";


function WatchList() {

    const { watchlist } = useContext(GlobalContext)

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">My Watchlist</h1>
                    <span className="count-pill">
                        {watchlist.length} Movie
                    </span>
                </div>

                {watchlist.length > 0 ? (
                    <div className="movie-grid">
                        {watchlist.map((movie) => (
                            <MovieCard movie={movie} type="watchlist" />
                        ))}
                    </div>
                ) : (
                    <h2 className="no-movies">No movies in your list</h2>
                )}
                
            </div>
        </div>
    )
}

export default WatchList