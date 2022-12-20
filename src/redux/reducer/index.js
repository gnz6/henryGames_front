import { 
GET_VIDEOGAMES,
FILTER_BY_GENRE,
FILTER_BY_STORED,
SORT_BY_ALPHABET,
SORT_BY_RATING,
GET_GENRES,
GET_DETAIL,
FILTER_BY_PLATFORMS
} from "../actions/index";

const initialState = {
    games : [],
    allGames : [],
    genres: [],
    detail:{},
}

const rootReducer = (state= initialState, action) =>{
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state, 
                games: action.payload,
                allGames: action.payload
            }

        case FILTER_BY_GENRE:

            const allGames = state.allGames;
            let gameGenre = action.payload === "all" ? allGames : allGames.filter(game => game.genres.includes(action.payload))
            if(!gameGenre[0]) gameGenre = "error"
            console.log(state);
        return{
            ...state,
            games: gameGenre
        }

        case FILTER_BY_STORED:
        const games = state.allGames
        let whereAbout = action.payload 
    
        if(whereAbout === "all") whereAbout = games
        if(whereAbout === "api") whereAbout = games.filter(game => game.createdInDb === false)
        if(whereAbout === "db") whereAbout = games.filter(game => game.createdInDb === true)
        if(!whereAbout[0]) whereAbout = "error"


        return{
            ...state, games: whereAbout
        }

        case SORT_BY_ALPHABET:
        let letterOrder = action.payload === "des"?
            state.games.sort((a,b)=>{
                if(a.name > b.name) return 1
                if(b.name > a.name) return -1
                return 0
            }):
            state.games.sort((a,b)=>{
                if(a.name < b.name) return 1
                if(b.name < a.name) return -1
                return 0
                }) 
        
        return{
            ...state, letterOrder
        }

        case SORT_BY_RATING:
            let ratingOrder = action.payload === "low"?
            state.games.sort((a,b)=>{
                if(a.rating > b.rating) return 1
                if(b.rating > a.rating) return -1
                return 0
            }):
            state.games.sort((a,b)=>{
                if(a.rating < b.rating) return 1
                if(b.rating < a.rating) return -1
                return 0
                }) 
        
        return{
            ...state, ratingOrder
        }
       
        case GET_GENRES:
            return{
                ...state, genres: action.payload
            }

        case GET_DETAIL:
            return{
                ...state, detail: action.payload
            }
        case FILTER_BY_PLATFORMS:
            let Games = state.allGames
            let platformFilter = action.payload === "all"?
            Games:
            Games.filter(g=> g.platforms.includes(action.payload))
            if(!platformFilter[0]) platformFilter = "error"
        
        return{
            ...state, games : platformFilter
        }
        default:
            return state
            }

}

export default rootReducer;


   