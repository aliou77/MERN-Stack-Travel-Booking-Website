import React from 'react'

function Title({ title, spanTitle}) {
  return (
    <h3 className='capitalize sm:text-[2rem] text-[1.6rem] font-bold'>
        {title} <span className='text-blue-900'>{spanTitle}</span>
    </h3>
  )
}

export default Title