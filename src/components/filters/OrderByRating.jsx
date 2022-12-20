import React from 'react'

const OrderByRating = ({handleOrderRating}) => {
    
  return (
    <div className='orderRatingContainer'>
    <label>Order by Rating:
        <select name='rating' onChange={handleOrderRating}>
            <option disabled defaultValue="rating">Rating</option>
            <option value="rating">Score</option>
            <option value="high"> Highest Rated ★ </option>
            <option value="low"> Lowest Rated ☆ </option>
        </select>
    </label>
</div>
  )
}

export default OrderByRating