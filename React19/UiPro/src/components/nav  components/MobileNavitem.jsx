import React from 'react'

function MobileNavitem({label}) {
  return (
    <div>
      <a href='#'
      className='block text-lg font-medium text-gray-700 hover:text-blue-600 transition'>
        {label}
      </a>
    </div>
  )
}

export default MobileNavitem
