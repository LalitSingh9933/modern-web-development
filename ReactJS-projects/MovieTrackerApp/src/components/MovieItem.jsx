import React from 'react'
import { FaTrash, FaCheck, FaCheckCircle, FaClock } from 'react-icons/fa'


function MovieItem({ movie, onDelete, onToggleWatched }) {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md flex justify-between items-center">
      <div>
        <h3
          className={`text-lg font-bold ${
            movie.watched ? 'line-through text-gray-500' : ''
          }`}
        >
          {movie.title}
        </h3>
         <p className="text-sm flex items-center gap-2">
          {movie.watched ? (
            <>
              <FaCheckCircle className="text-green-600" />
              <span>Watched</span>
            </>
          ) : (
            <>
              <FaClock className="text-yellow-500" />
              <span>To Watch</span>
            </>
          )}
        </p>
      </div>

      <div className="space-x-2">
        <button
          onClick={onToggleWatched}
          className="px-2 py-1 text-sm bg-green-500 text-white rounded"
        >
          Toggle
        </button>

        <button
          onClick={onDelete}
          className="px-2 py-1 text-sm bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default MovieItem
