import React from 'react'

const FilterByStorage = ({handleStoredChange}) => {
  return (
    <div className='filterContainer'>
    <label> Stored in:
        <select name='stored' onChange={handleStoredChange}>
            <option value="all" >Anywhere</option>
            <option value="api">RAWG</option>
            <option value="db">Created by Users!</option>
        </select>
    </label>
</div>
  )
}

export default FilterByStorage