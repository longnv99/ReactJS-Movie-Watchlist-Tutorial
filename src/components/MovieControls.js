import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState';

function MovieControls({ movie, type }) {
    
    const { 
        removeMovieFromWatchlist, 
        addMovieToWatched,
        moveToWatchlist,
        removeMovieFromWatched
    } = useContext(GlobalContext)

    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button 
                        className="ctrl-btn"
                        onClick={() => addMovieToWatched(movie)}
                    >
                        <i class="fas fa-eye"></i>
                    </button>

                    <button 
                        className="ctrl-btn"
                        onClick={() => removeMovieFromWatchlist(movie.id)}
                    >
                        <i class="fas fa-times"></i>
                    </button>
                </>
            )}

            {type === "watched" && (
                <>
                    <button 
                        className="ctrl-btn"
                        onClick={() => moveToWatchlist(movie)}
                    >
                        <i class="fas fa-eye-slash"></i>
                    </button>

                    <button 
                        className="ctrl-btn"
                        onClick={() => removeMovieFromWatched(movie.id)}
                    >
                        <i class="fas fa-times"></i>
                    </button>
                </>
            )}
        </div>
    )
}

export default MovieControls