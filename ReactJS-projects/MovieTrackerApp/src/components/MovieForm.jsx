import React from 'react'
import { useForm } from 'react-hook-form'

function MovieForm({ onAddMovie }) {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    onAddMovie(data)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 bg-white shadow-md rounded"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium">Movie Title</label>
        <input
          {...register('title', { required: true })}
          className="mt-1 w-full px-3 py-2 border rounded"
          placeholder="Enter movie name"
        />
      </div>

      <button className="px-4 py-2 bg-indigo-500 text-white rounded">
        Add Movie
      </button>
    </form>
  )
}

export default MovieForm
