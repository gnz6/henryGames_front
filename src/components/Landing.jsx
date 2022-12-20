import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import  "./Home.css";



 export default function Landing (){
  document.title = "HenryGames"
  return (
    <div className='landing'>
    
    <div className='titleContainer' >
    <h2 className='pretitle' >Welcome to</h2>
   <h1 className='landingTitle'>Henrygames!</h1>
    </div>
    <div className="pacman" >

      <img src='https://i.gifer.com/T7n.gif' alt="pacman" height="300px"/>

      </div>
      

    <Link to="/home">
    <button className='start'> 
      <img src="http://static.tumblr.com/0cac4d2ad28ac35f68e64371a53b1117/tsip0xt/nYjn2ytth/tumblr_static_output_py1iva.gif" alt="pressStart" height="120px"/>
    </button>
    </Link>
    <div className='landingFooter'>
    </div>

    <Footer/>
    </div>
  )
}


