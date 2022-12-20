import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_BY_STORED = "FILTER_BY_STORED";
export const SORT_BY_RATING = "ORT_BY_RATING";
export const SORT_BY_ALPHABET = "SORT_BY_ALPHABET";
export const GET_DETAIL = "GET_DETAIL";
export const FILTER_BY_PLATFORMS ="FILTER_BY_PLATFORMS";


export function getGames() {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/videogames");
        const resp = json.data
         return dispatch({
            type:GET_VIDEOGAMES,
            payload: resp
        })
        }  
    }

    export function filterByGenre(payload){
        return{
            type: FILTER_BY_GENRE,
            payload
        }
    }
    export function filterByStored(payload){
        return{
            type: FILTER_BY_STORED,
            payload
        }
    }

    export function filterByPlaforms(payload){
        return{
            type:FILTER_BY_PLATFORMS,
            payload
        }
    }


    export function sortByRating(payload){
        return{
            type: SORT_BY_RATING,
            payload
        }
    }

    export function sortByAlphabet(payload){
        return{
            type: SORT_BY_ALPHABET,
            payload
        }
    }


    export function getGenres(){
        return async function(dispatch){
            var resp = await axios.get("http://localhost:3001/genres")
            return dispatch({
                type: GET_GENRES,
                payload:resp.data
            })

        }
    }

    export function createGame(payload){
        return async function() {
            var resp = axios.post("http://localhost:3001/videogames", payload)
            return resp

        }
    }

    export function getDetail(id){
        return async function(dispatch){
            try{
                var resp = await axios.get( `http://localhost:3001/videogames/${id}`)
                return  dispatch({
                    type: GET_DETAIL,
                    payload: resp.data
                })

            }catch(error){
                console.log(error)
            }
        }
    }

    export function deleteGame(id){
        return async function(dispatch){
            var resp = await axios.delete(`http://localhost:3001/videogames/${id}`)
            return dispatch({
                type : "DELETE_GAME",
                payload: resp
            })
        }
        
    }
