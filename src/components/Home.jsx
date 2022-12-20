import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getGames, filterByGenre, filterByStored, sortByAlphabet, sortByRating, getGenres, filterByPlaforms } from '../redux/actions';
import { NavLink } from "react-router-dom";
import Card from './Card';
import Title from './Title';
import Footer from './Footer';
import Loader from './Loader';
import "./Home.css";
import Return from './Return';
import OrderByABC from "./filters/OrderByABC"
import OrderByRating from "./filters/OrderByRating"
import FilterByStorage from "./filters/FilterByStorage"
import FilterByPlatform from "./filters/FilterByPlatform"
import SearchByGenre from "./filters/SearchByGenre"



export default function Home() {


    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState("")
    const [order, setOrder] = useState("")


    const dispatch = useDispatch();
    const allGames = useSelector((state) => state.games) || []
    const genres = useSelector((state) => state.genres)

    useEffect(() => {
        dispatch(getGames())
    }, [dispatch])

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    //Paging
    const gamesPerPage = () => {
        if (search.length === 0) {
            const filteredGames = allGames.slice(currentPage, currentPage + 15)
            return filteredGames
        }
        const filteredGames = allGames.filter(game => game.name.toLowerCase().includes(search.toLowerCase()))
        return filteredGames.slice(currentPage, currentPage + 15)
    }

    const nextPage = () => {
        if (allGames.filter(game => game.name.includes(search)).length > currentPage + 15) {
            setCurrentPage(currentPage + 15)
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 15)
        }
    }


    //filters&&Orders


    const handleGenreChange = (e) => {
        dispatch(filterByGenre(e.target.value))
        setCurrentPage(0)
    }

    const handleStoredChange = (e) => {
        dispatch(filterByStored(e.target.value))
        setCurrentPage(0)
    }

    const handleOrderA = (e) => {
        e.preventDefault();
        dispatch(sortByAlphabet(e.target.value))
        setOrder(e.target.value)
        setCurrentPage(0)
    }

    const handleOrderRating = (e) => {
        e.preventDefault();
        dispatch(sortByRating(e.target.value))
        setOrder(e.target.value)
        setCurrentPage(0)
    }

    const handlePlatformChange = (e) => {
        e.preventDefault();
        dispatch(filterByPlaforms(e.target.value))
        setCurrentPage(0)
    }


    //SearchBar & Refresh

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getGames())
        setCurrentPage(0)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
        setCurrentPage(0)
    }


    return (
        <div>
            <div className='barsContainer'>
                <Title />


                <div className='second'>

                    <OrderByABC handleOrderA={handleOrderA} />
                    <OrderByRating handleOrderRating={handleOrderRating} />
                    <SearchByGenre handleGenreChange={handleGenreChange} genres={genres} />
                    <FilterByPlatform handlePlatformChange={handlePlatformChange} />
                    <FilterByStorage handleStoredChange={handleStoredChange} />

                </div>


                <div className='third'>

                    {/* //Paging && Refresh */}

                    <button className='pagingButton' onClick={prevPage}>⇐  Previous Page </button>

                    <button className='pagingButton'>
                        <NavLink className="createButton" to="/createGame"
                            style={() => ({
                                textDecoration: "none"

                            })}> Add Game to our Library!
                        </NavLink>
                    </button>

                    <button className='pagingButton' onClick={handleClick}> Refresh Games ↺</button>

                    <button className='pagingButton' onClick={nextPage}>Next Page ⇒ </button>

                </div>

                {/* SearchBar */}
                <input type="text" className="searchBar" placeholder="Search Games.." value={search} onChange={handleSearch} />
            </div>


            <div className="fourth">


                {
                    !gamesPerPage()[0] ?
                        <Loader /> :
                        allGames === "error" ?
                            <Return /> :


                            gamesPerPage()?.map(game => {

                                return (

                                    <div key={game.id} className="gridGame">

                                        <NavLink to={`/home/${game.id}`}
                                            style={({ isActive }) =>
                                            ({
                                                color: isActive ? "yellow" : "#fff",
                                                backgroundColor: "000",
                                                textDecoration: "none",
                                                borderRadius: "15px",
                                            })}>

                                            <Card
                                                id={game.id}
                                                image={game.image}
                                                name={game.name}
                                                genres={game.genres}
                                                rating={game.rating}
                                                platforms={game.platforms + "  "}
                                            />
                                        </NavLink>
                                    </div>
                                )
                            })

                }
            </div>
            <br></br>
            <Footer />

        </div>
    )
}

