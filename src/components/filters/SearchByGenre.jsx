import React from 'react'

const SearchByGenre = ({handleGenreChange, genres}) => {
  return (
    <div>
    <label> Search by Genre:
        <select name='genre' defaultValue="all" onChange={handleGenreChange}>
            <option disabled > Search by Genre: </option>
            <option value="all"> All Genres </option>
            {genres.map(g =>
                <option key={g.id} value={g.name}>
                    {g.name}
                </option>
            )}

        </select>
    </label>
</div>
  )
}

export default SearchByGenre