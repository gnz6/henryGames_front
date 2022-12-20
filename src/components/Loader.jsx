import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Loader (){

 
  return (
    <div>

      <div className='loaderContainer'> 

    <div className='gifContainer'>
        <img src='https://i.gifer.com/origin/64/649852e53b7e4edf15ea1c2f23a61f29_w200.gif' alt="pacman" height="220px"/>
        <img src='https://i.gifer.com/origin/00/00c330154483d2b2e3162e95ce7be2ba_w200.gif' alt='orange' height="150px"/>
        <img src='https://i.gifer.com/origin/7c/7c145ab9ffe62056d4eab27d7f940600_w200.gif' alt="red" height="150px"/>

    </div>
      <h1 className='loaderText'>Loading, please wait...</h1>
      <br></br>
      <NavLink to={"/"}>
      <button className='loaderButton'>Go Back</button>
      </NavLink>
      </div> 
    </div>
  )
}
