import React from 'react'

const FilterByPlatform = ({handlePlatformChange}) => {
  return (
    <div className='filterPlatform' onChange={handlePlatformChange}>
                        <label>Games for:</label>
                        <select name='platform'>
                            <option disabled>PC Games:</option>
                            <option value="all">All Platforms</option>
                            <option value="PC">Windows</option>
                            <option value="Linux">Linux</option>
                            <option value="macOS">macOS</option>
                            <option disabled>Sony PlayStation:</option>
                            <option value="PlayStation 5">PlayStation 5</option>
                            <option value="PlayStation 4">PlayStation 4</option>
                            <option value="PlayStation 3">PlayStation 3</option>
                            <option value="PlayStation 2">PlayStation 2</option>
                            <option disabled>Microsoft Xbox:</option>
                            <option value="Xbox Series S/X"> Xbox Series S/X</option>
                            <option value="Xbox Series One"> Xbox Series One</option>
                            <option value="Xbox Series 360"> Xbox Series 360</option>
                            <option disabled>Mobile Games:</option>
                            <option value="Android"> Android</option>
                            <option value="iOS"> iOS</option>
                            <option value="Nintendo Switch"> Nintendo Switch</option>
                            <option value="PS Vita">PS Vita</option>


                        </select>
                    </div>
  )
}

export default FilterByPlatform