import React from 'react'
import MovieItem from './MovieItem'

function MovieList({ movies, onDelete, onToggleWatched }) {
  if (movies.length === 0) {
    return <p className="text-center text-gray-500">No movies added yet 🎬</p>
  }

  return (
    <div className="space-y-2">
      {movies.map((movie, index) => (
        <MovieItem
          key={index}
          movie={movie}
          onDelete={() => onDelete(index)}
          onToggleWatched={() => onToggleWatched(index)}
        />
      ))}
    </div>
  )
}

export default MovieList
