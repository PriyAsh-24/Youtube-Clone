import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../Utils/constants';
import { cacheResults } from '../Utils/searcSlice';

const Head = () => {
  const [searchQuery,setSeacrhQuery]=useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);
  const searchCache=useSelector((store)=>store.search)

  const dispatch=useDispatch();

  useEffect(()=>{
    //Api calls
    // console.log(searchQuery);

    // make an api call after ever key press
    // but if the difrrence between 2 api calls is <200ms
    //decline the api call
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestion();
      }
      
    },200) 

    return()=>{
      clearTimeout(timer);
    }

  },[searchQuery])

  const getSearchSuggestion=async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    // console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery] : json[1],
    }));
  }



    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
  return (
    <div className='grid grid-flow-col p-2 shadow-lg'>
      <div className='flex col-span-1 pt-2'>
        <img 
            onClick={()=> toggleMenuHandler()}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png' 
            alt='Humberger menu'
            className='p-4 w-16 h-16 cursor-pointer hover:bg-gray-300 rounded-md'
        />
        <a href='/'>
            <img 
                alt='Logo' 
                src='https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg'
                className='h-16'
            />
        </a>
      </div>
      <div className='p-5 col-span-10 text-center'>
        <div>
          <input 
            type='text' 
            placeholder='Search' 
            className='w-1/2 p-2 border border-gray-400 rounded-l-full'
            value={searchQuery}
            onChange={(e)=> setSeacrhQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
        
        <button className='py-2 px-3 border border-gray-400 rounded-r-full bg-gray-300'>🔍</button>
        </div>
        {showSuggestions && 
        <div className='ml-80'>
          <ul className='absolute bg-white py-2 px-5 w-[43rem] text-left rounded-md shadow-lg border border-gray-100'>
            {suggestions.map((s)=>(
                <li key={s} className='py-2 shadow-sm my-1 cursor-default' >🔍 {s}</li>
            ))}
          </ul>
        </div>}
      </div>
      <div className='col-span-1 pt-2'>
        <img 
            className='h-16'
            alt='user' 
            src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'
        />
      </div>
    </div>
  )
}

export default Head
