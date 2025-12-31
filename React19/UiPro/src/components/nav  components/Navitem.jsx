import React from 'react'

function Navitem({icon, label}) {
  return (
    <div>
      <a href='#' className='flex items-center gap-1 text-gray-700 hover:text-blue-600 transition'>
        {icon} {label}

      </a>
    </div>
  )
}

export default Navitem
