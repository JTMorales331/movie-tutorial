import React from 'react'
import { FaHeart } from 'react-icons/fa'
import '../styles/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext'


export default function MovieCard({movie}) {

  const {
    isFavourite,
    addToFavourites,
    removeFromFavourites
  } = useMovieContext()

  const favourite = isFavourite(movie.id)
  
  function onFavoriteClick(e) {
    e.preventDefault()
    if (favourite) removeFromFavourites(movie.id)
      else addToFavourites(movie)
    alert('Favorite clicked');
  }

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <div className="movie-card mb-2">
      <div className="movie-poster">
        <img src={posterUrl} alt={movie.title} />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favourite ? "active" : ""}`} onClick={onFavoriteClick}>
            <FaHeart />
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  )
}
