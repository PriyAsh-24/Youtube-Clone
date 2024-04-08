import React from 'react'

const VideoCard = ({info}) => {

    // console.log(info);
    const {snippet}=info;
    const {title,thumbnails,channelTitle,publishedAt}=snippet;
  return (
    <div className='p-2 m-2 w-80 shadow-lg'>
        <img
            className='rounded-lg ' 
            alt='Thumbnail' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{publishedAt.slice(0,10)}</li>
        </ul>
    </div>
  )
}

//Higher Order Function 
export const AdVideoCard =({info})=>{
  return (
    <div className='p-1 m-1 border border-red-900'>
      <h1 className='absolute'>AD</h1>
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard
