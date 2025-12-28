import React from 'react'
import { Link } from 'react-router-dom'

function Card({ blog }) {

    // // Format date if available
    // const formatDate = (dateString) => {
    //     if (!dateString) return ''
    //     const options = { year: 'numeric', month: 'short', day: 'numeric' }
    //     return new Date(dateString).toLocaleDateString('en-US', options)
    // }

    // // Truncate text to specified length
    // const truncateText = (text, maxLength) => {
    //     if (!text) return ''
    //     if (text.length <= maxLength) return text
    //     return text.substring(0, maxLength) + '...'
    // }

    return (
        <Link to={`/blog/${blog._id || blog.id}`} className="block">
            <div className="max-w-xs rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                {/* Blog Image */}
                <div className="w-full h-48 overflow-hidden">
                    <img
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        src={blog.image || blog.imageUrl || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                        alt={blog.title || "Blog cover"}
                        onError={(e) => {
                            e.target.onerror = null
                            e.target.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        }}
                    />
                </div>

                {/* Blog Content */}
                <div className="px-6 py-4">
                    {/* Category Badge */}
                    {blog.category && (
                        <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                            {blog.category}
                        </span>
                    )}

                    {/* Title */}
                    <h2 className="font-bold text-xl mb-2 text-gray-800 hover:text-indigo-600 transition-colors duration-200">
                        {truncateText(blog.title, 60)}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {truncateText(blog.description || blog.content || blog.subtitle, 120)}
                    </p>

                    {/* Author and Date */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            <span>{blog.author || 'Anonymous'}</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span>{formatDate(blog.createdAt || blog.date)}</span>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="px-0 pb-2 flex flex-wrap gap-2">
                        {blog.tags && blog.tags.length > 0 ? (
                            blog.tags.slice(0, 3).map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700 transition-colors duration-200"
                                >
                                    #{tag}
                                </span>
                            ))
                        ) : (
                            <>
                                <span className="bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-600">
                                    #blog
                                </span>
                                <span className="bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-600">
                                    #post
                                </span>
                            </>
                        )}
                        {blog.tags && blog.tags.length > 3 && (
                            <span className="bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-600">
                                +{blog.tags.length - 3} more
                            </span>
                        )}
                    </div>

                    {/* Read More Link */}
                    <div className="mt-4 flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                        <span>Read More</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card