import React from 'react';


export default function Card({image, name, genres, rating, platforms,id}){
  return (
    <div className='cardContainer'>

        <h3 className='cardTitle'>{name}</h3>

        <div className='cardGenresScore'>
          <div className='cardGenres'>
        <h4>{ genres.join(",")}</h4>
          </div>
        <div className='cardScore'>
          <h3>{rating} ★</h3>

        </div>
        </div>
        <div className='cardImgContainer'>
         <img className='cardImg' src={image} alt={name + ".jpg"} /> 
         </div>
         
         <div className='cardPlatfoms'>
         <p>Available for:</p>
         <div> {platforms? <h4 className='cardPlatform'>{platforms} </h4>  : platforms.map(p=>" "+ p + " ")}</div>

         </div>
    </div>

  )
}
