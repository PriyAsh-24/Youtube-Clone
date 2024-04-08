import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='mx-1 my-2 px-5 py-2 bg-slate-300 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
