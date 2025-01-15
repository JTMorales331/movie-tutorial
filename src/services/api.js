const API_KEY = import.meta.env.VITE_SOME_KEY;
const VITE_URL = import.meta.env.VITE_URL;

console.log(import.meta.env.VITE_SOME_KEY) // "123"
console.log(import.meta.env.VITE_URL)

// const API_KEY = REACT_APP_API_KEY;
// const BASE_URL = REACT_APP_BASE_URL;


export const getPopularMovies = async () => {
  const response = await fetch(`${VITE_URL}/movie/popular?api_key=${API_KEY}`)
  const data = await response.json()
  return data.results
}

export const searchMovies = async (query) => {
  const response = await fetch(
    `${VITE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  )
  const data = await response.json()
  return data.results
}

