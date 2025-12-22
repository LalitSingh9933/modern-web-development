import { useState } from 'react'
import MovieForm from './components/MovieForm'
import MovieList from './components/MovieList'

function App() {
  const [movies, setMovies] = useState([])

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, watched: false }])
  }

  const deleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index))
  }

  const toggleWatched = (index) => {
    setMovies(
      movies.map((movie, i) =>
        i === index ? { ...movie, watched: !movie.watched } : movie
      )
    )
  }

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <MovieForm onAddMovie={addMovie} />
      <MovieList
        movies={movies}
        onDelete={deleteMovie}
        onToggleWatched={toggleWatched}
      />
    </div>
  )
}

export default App
