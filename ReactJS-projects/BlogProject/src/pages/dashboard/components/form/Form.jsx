import React, { useState } from 'react'

function Form({ type, onSubmit }) {
    const [data, setData] = useState({
        title: '',
        subtitle: '',
        description: '',
        image: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: name === 'image' ? e.target.files[0] : value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(data)

    }
    return (
        <div>
            <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto">
                    <div className="max-w-md mx-auto my-10 bg-white dark:bg-gray-800 p-5 rounded-md shadow-sm">
                        <div className="text-center">
                            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">{type}</h1>
                            <p className="text-gray-400 dark:text-gray-400">Share your idea with world</p>
                        </div>
                        <div className="m-7">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label htmlFor="title" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Tital </label>
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="John Doe"
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="subtitle" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Subtitle</label>
                                    <input
                                        type="subtitle"
                                        name="email"
                                        placeholder="Subtitle"
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div className="mb-6">

                                    <label htmlFor="img" className="text-sm text-gray-600 dark:text-gray-400">Image</label>
                                    <input
                                        type="file"
                                        name="img"
                                        placeholder="File"
                                        onChange={handleChange}
                                    
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Description</label>
                                    <textarea
                                        rows="5"
                                        name="message"
                                        id="message"
                                        placeholder="Description"
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                                </div>
                                <div className="mb-6">
                                    <button
                                        type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Submit</button>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
