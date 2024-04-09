import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex shadow-md p-2 items-center'>
      <img className='w-14 h-14 p-2 ' alt='user' src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"/>
      <span className='font-bold px-3'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
