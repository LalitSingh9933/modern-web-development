import React, { useState, useEffect } from 'react'

function Form({ type, onSubmit, initialData }) {
    const [data, setData] = useState({
        title: '',
        subtitle: '',
        description: '',
        image: null,
        category: ''
    })

    // Populate data when editing
    useEffect(() => {
        if (initialData) {
            setData(prev => ({
                ...prev,
                ...initialData
            }))
        }
    }, [initialData])

    const handleChange = (e) => {
        const { name, value, files } = e.target
        setData({
            ...data,
            [name]: files ? files[0] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(data)
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6">
            <input
                type="text"
                name="title"
                value={data.title}
                onChange={handleChange}
                placeholder="Title"
                required
                className="w-full mb-4 p-3 border rounded"
            />

            <input
                type="text"
                name="subtitle"
                value={data.subtitle}
                onChange={handleChange}
                placeholder="Subtitle"
                className="w-full mb-4 p-3 border rounded"
            />

            <input
                type="text"
                name="category"
                value={data.category}
                onChange={handleChange}
                placeholder="Category"
                required
                className="w-full mb-4 p-3 border rounded"
            />

            <textarea
                name="description"
                value={data.description}
                onChange={handleChange}
                placeholder="Description"
                rows="5"
                required
                className="w-full mb-4 p-3 border rounded"
            />

            <input
                type="file"
                name="image"
                onChange={handleChange}
                className="mb-4"
            />

            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded"
            >
                {type === 'Create' ? 'Publish Blog' : 'Update Blog'}
            </button>
        </form>
    )
}

export default Form
