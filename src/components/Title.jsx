import { NavLink } from 'react-router-dom'
import React from 'react'

export default function Title() {
  return (
      
    <div> 
    <NavLink to={"/home"}
    style={({isActive})=>({
    color: isActive? "#fff" : "yellow",
    backgroundColor: "000",
    textDecoration:"none",
    
        })} >
    <div className='first'>

      <div className='marioTitle' ></div>
    <h1 className='title'>HenryGames</h1>


    </div>
    </NavLink>
   </div>
  )
}
