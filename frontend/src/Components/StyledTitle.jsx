import React from 'react'

function StyledTitle({ title }) {
  return (
    <h3 className='capitalize rounded-full bg-blue-900 text-white sm:text-base text-sm font-[cursive] w-max px-4 py-2 mb-4'>
        {title}
    </h3>
  )
}

export default StyledTitle;