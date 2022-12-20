import React from 'react';
import { NavLink } from 'react-router-dom';
import Title from "./Title";
import Footer from "./Footer"
import "./Home.css"

export default function Return() {
  document.title = "Page not found"
  return (
    <div className="returnContainer">

      <div className='formDetailTitleContainer'>
      <Title/>

      </div>

      <h1 className="notFound">Games Not found</h1>
    <NavLink to="/"
    style={({isActive})=>
            ({
                color: isActive? "yellow": "yellow",
                backgroundColor: "000",
                textDecoration:"none",
                borderRadius: "15px",
             })}>
        <button className="returnButton">Return to HenryGames</button>

    </NavLink>
<Footer/>
    </div>
  )
}
