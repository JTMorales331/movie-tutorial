import { useEffect } from 'react'
import { MdLocalMovies } from 'react-icons/md'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

export default function Favourites() {
  const {favourites} = useMovieContext()

  useEffect(() => {
    const storedFavs = localStorage.getItem("favourites")
    console.log('from local storage: ', storedFavs)
  }, [favourites])
  

  return (
    <>
      {(favourites) ? (
        <div className="flex flex-col items-center justify-center w-full py-2">
          <div className="mb-5">
            <h2 className="font-bold text-2xl">Your Favourites</h2>
          </div>
          <div className="movie-grid flex justify-center items-center w-full px-4 mt-3">
            {favourites.map(movie => (
              (
                <MovieCard movie={movie} key={movie.id} />
              )
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
        <div className="card bg-card-grey text-primary-content mx-5 max-w-full">
          <div className="card-body">
            <div className="card-title flex flex-col items-center">
              <MdLocalMovies size={50} className="movie-icon text-primary-light"/>
              <h2 className="font-bold text-lg text-red-600">No Favourite Movies Yet</h2>
            </div>
            <p className="text-primary-light text-center">Start adding movies to your favorites and they will appear here</p>
          </div>
        </div>

      </div>
      )}
    </>
  )
}
