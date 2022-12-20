import { deleteGame, getDetail } from '../redux/actions';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect} from 'react';
import Title from './Title';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import  "./Home.css";
import Loader from './Loader';

export default function  Detail() {
  
    const dispatch = useDispatch()
    const {id} = useParams();
    const history = useHistory();

    useEffect(()=>{      
      dispatch(getDetail(id))
    },[dispatch, id])

    
    
    const game = useSelector(state=> state.detail.gameDetail) || {}
   
    document.title = game.name
   
    const handleDelete = () => {
      const choice = prompt(
        "Want to Delete this game? \n1: YES \n2: NO"
      );
      if (choice === 1) {
        dispatch(deleteGame(id));
        alert(`${game.name} deleted! \n Press button to return Home`)
        history.push("/home");
      } else {
        return;
      }
    };
  
    return (
      <div>
        {id !== game.id ?
        <div>
          <Loader/>
        </div>
        :  
        <div>
        <div className='formDetailTitleContainer'>
      <Title/>
        </div>
        
          <div>
          <div className='detailTitleContainer'>
              <h1 className='detailTitle'>{game.name}</h1>
          </div>

              <h2>{game.genres?.map(g=> <button key={g.id} className="genresButtons"> {g} </button>)}</h2> 
            
          <div className='detailContainer'>             
                <img className="gameImg" src={game.image} alt="game" border="10px solid white" width="50%" />
            <div className='detailDescription'>
                <h3 className='loquesea'> {game.name} - Description:</h3>
                <h4>{game.description}</h4>
            </div>
          </div>

          <div className='releaseRating'>
            <div className='detailRelease'>
                <h4>Release Date:</h4>
                <h2>{game.released}</h2>
            </div>

            <div className='detailRating'>
                <h4>Overall Rating:</h4>
                <h2>{game.rating} ★</h2>
            </div>
          </div>
                <h4>Avilable for:</h4>
                <h2>{game.platforms?.map(p=><button key={p.id}>{p}</button>)}</h2> 
          </div>
<div>
          {game.id && game.id.length >=8?
          <div className='buttonContainer'> 
           
          
          <NavLink to={"/home"}>
            <button className='formButton'>Go Back</button>
          </NavLink>

          <button  onClick={handleDelete} className='formButton3'>Delete Game</button>
          </div>

:

          <NavLink to={"/home"}>   
            <button className='formButton'>Go Back</button>
          </NavLink>

          }

          <Footer/>
        </div>
      </div>
}
    </div>

   )
  }
