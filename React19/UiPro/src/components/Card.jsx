import React from 'react'

function Card({ author, title, description, image }) {
    return (
        <div className="w-72 h-96 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col  hover:-translate-y-1  hover:shadow-lg transition-all duration-300">
            {/* Fixed height image container */}
            <div className='h-48 w-full shrink-0'>
                <img 
                    className='w-full h-full object-cover'
                    src={image}
                    alt={title} 
                />
            </div>
            
            {/* Content area with fixed height */}
            <div className='p-4 flex flex-col flex-1'>
                <h3 className="font-bold text-lg mb-2 truncate">{title}</h3>
                <p className='text-gray-600 text-sm mb-2 line-clamp-2 flex-1'>{description}</p>
                <div className="mt-auto">
                    <p className="text-xs text-gray-500 mb-2">By: {author}</p>
                </div>
            </div>
        </div>
    )
}

export default Card