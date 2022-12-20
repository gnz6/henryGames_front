import React from 'react'

const OrderByABC = ({handleOrderA}) => {
    
  return (
    <div className='orderAplhaContainer'>
                <label>Order by Alphabet:
                    <select name='order' onChange={handleOrderA}>
                        <option disabled defaultValue="Alphabetical">Alphabet</option>
                        <option value="Alphabetical">Alphabet</option>
                        <option value= "des">  A-Z  ↓↑</option>
                        <option value= "asc">  Z-A  ↑↓ </option>
                    </select>
                </label>
    </div>
  )
}

export default OrderByABC