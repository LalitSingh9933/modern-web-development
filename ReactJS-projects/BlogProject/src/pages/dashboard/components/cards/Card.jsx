import React from 'react'
import { Link } from 'react-router-dom'

function Card({ blog }) {
    // Format date like "Oct 23"
    const formatDate = (dateString) => {
        if (!dateString) return ''
        const date = new Date(dateString)
        const month = date.toLocaleDateString('en-US', { month: 'short' })
        const day = date.getDate()
        return `${month} ${day}`
    }

    // Truncate text
    const truncate = (text, length) => {
        if (!text) return ''
        return text.length > length ? text.substring(0, length) + '...' : text
    }

    return (
        <Link to={`/blog/${blog._id}`} className="block">
            {/* Medium-style card - no shadow, just border */}
            <div className="border-b border-gray-200 py-6 hover:bg-gray-50 px-2 cursor-pointer w-2xl">

                {/* Author and date row */}
                <div className="flex items-center text-sm text-gray-600 mb-2">
                    <span className="font-medium">{blog.author || 'Anonymous'}</span>
                    <span className="mx-2">•</span>
                    <span>{formatDate(blog.createdAt)}</span>
                </div>

                {/* Main content row */}
                <div className="flex justify-between gap-4">
                    {/* Text content */}
                    <div className="flex-1">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">
                            {truncate(blog.title, 70)}
                        </h2>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {truncate(blog.description || blog.content, 120)}
                        </p>

                        {/* Footer - category and stats */}
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                {blog.category || 'Uncategorized'}
                            </span>
                            <div className="text-gray-500">
                                {blog.readTime || '2 min read'}
                            </div>
                        </div>
                    </div>

                    {/* Optional thumbnail */}
                    {blog.image || (
                        <div className="w-32 h-24 shrink-0">
                            <img
                                src={ blog.image || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                                onError={(e) => e.target.style.display = 'none'}
                            />
                        </div>
                    )}
                </div>
            </div>
        </Link>
    )
}

export default Card