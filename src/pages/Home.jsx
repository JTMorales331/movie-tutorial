import { useEffect, useState } from 'react'
import '../styles/Home.css'
import MovieCard from '../components/MovieCard'
import { searchMovies, getPopularMovies } from '../services/api'

export default function Home() {

  const [searchQuery, setSearchQuery] = useState("")
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        getPopularMovies().then(data => {
          console.log(data)
          setMovies(data)
        })
      } catch (err) {
        console.error(err)
        setError("Failed to load movies...")
      } finally {
        setLoading(false)
      }
    }

    loadPopularMovies()
  },[])

  const handleSearch = async (e) => {
    e.preventDefault()

    if(!searchQuery.trim()) return

    if(loading) return

    setLoading(true)

    try {
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)
    } catch (err) {
      console.error(err)
      setError("Failed to search movies...")
    } finally {
      setLoading(false)
      console.log(searchQuery)
    }
  }
  
  return (
    <div className="home flex flex-col items-center justify-center w-full py-5">
      <form 
        onSubmit={handleSearch} 
        className="search-form flex flex-row justify-between items-center gap-2 mb-3"
      >
        <label className="form-control w-full max-w-xs">
          <input 
            type="text"
            placeholder="Search for movies..."
            className="input input-sm input-bordered w-full max-w-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="btn btn-sm px-3 bg-red-700 text-primary-light"
        >
          Search
        </button>

      </form>

      {error && <div className="text-red-500">{error}</div>}

      {loading ? 
        <div className="">Loading...</div> 
        : (
        <div className="movie-grid flex justify-center items-center w-full px-4 mt-3">
          {movies.map(movie => (
            (
              <MovieCard movie={movie} key={movie.id} />
            )
          ))}
        </div>
      )}
    </div>
  )
}
