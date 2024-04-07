import React from 'react'

function Title({ title, spanTitle}) {
  return (
    <h3 className='capitalize text-[2rem] font-bold'>
        {title} <span className='text-blue-900'>{spanTitle}</span>
    </h3>
  )
}

export default Title