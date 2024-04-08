import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

    if(!isMenuOpen) return null;
    const arrow='>';
  return (
    <div className='w-56 shadow-lg py-4 px-10'>
        <div className='border-b-2 py-5'>
            <Link tp='/'><h1 className='font-bold py-2 m-1 flex'><img src='https://img.icons8.com/?size=30&id=59809&format=png' className='w-6'/>Home</h1></Link>
            <h1 className='font-bold py-2 m-1 flex'><img className='w-6' src='https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png' />Shorts</h1>
            <h1 className='font-bold py-2 m-1 flex'><img className='w-6' src='https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png' />Subscriptions</h1>
        </div>
      <ul className='border-b-2'>
        <li className='pt-3 font-bold text-lg'>You {arrow} </li>
        <li className='p-2'>Your Channel</li>
        <li className='p-2'>History</li>
        <li className='p-2'>Your Videos</li>
        <li className='p-2'>Watch Later</li>
      </ul>
      <ul>
        <li className='pt-3 font-bold text-lg'>Explore {arrow}</li>
        <li className='p-2'>Trending</li>
        <li className='p-2'>Shopping</li>
        <li className='p-2'>Music</li>
        <li className='p-2'>Films</li>
        <li className='p-2'>Live</li>
        <li className='p-2'>Gaming</li>
        <li className='p-2'>News</li>
        <li className='p-2'>Sport</li>
      </ul>
    </div>
  )
}

export default Sidebar
