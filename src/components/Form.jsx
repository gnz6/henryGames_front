import React,{useState, useEffect} from 'react';
import {createGame, getGenres} from "../redux/actions/index"
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import Title from './Title';
import Footer from './Footer';
import "./Home.css";

export default function Form() {

    //Global States
    const dispatch = useDispatch()
    const genres = useSelector((state) => state.genres)


    //useEffect
    useEffect(()=>{
        dispatch(getGenres())
    },[dispatch])
    
    document.title= "Create Your Game!"
    
    //Validate for Handlers
    const validate=(input)=>{
        let errors={}
        if(!input.name) errors.name = "A name is required"
        if(!input.description) errors.description = "A description is required"
        if(!input.released) errors.released = "Please insert the release date of your Game"
        if(!input.rating) errors.rating = "A rating is required"
    
        return errors
    }

    //Local States

    const [errors, setErrors] = useState({})
    const history = useHistory();

    
    const[input, setInput] = useState({
        name:"",
        description:"",
        platforms:[],
        genres:[],
        released:"",
        rating:1,
        createdInDb : true,
        image:""
    })


    //Handlers
    
    const handleChange =(e) =>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]:e.target.value
        }))
    }

    const handlePlatformCheck=(e)=>{
        if(e.target.checked){
            setInput({
                ...input,
                platforms: [...input.platforms, e.target.value]
            })
            
        }
        setErrors(validate({
            ...input,
            [e.target.name]:e.target.value
        }))
    }
    
    
    const handleGenreCheck=(e)=>{
        if(e.target.checked){
            setInput({
                ...input,
                genres: [...input.genres,e.target.value ]
            })
        }
        setErrors(validate({
            ...input,
            genres: [...input.genres,e.target.value ]
        }))
    }
    

    const handleSelect = (e)=>{
        setInput({
            ...input,
            rating:e.target.value
        })
        setErrors(validate({
            ...input,
            rating:e.target.value
        }))
    
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        dispatch(
            createGame(input))
        alert("Game Created!")
        setInput({
            name:"",
        description:"",
        platforms:[],
        genres:[],
        released:"",
        rating:1,
        createdInDb : true,
        image:""
        })
        console.log(input)
        history.push("/home")
    }
    
   
  
  return (
    <div>
               
        <div className='formDetailTitleContainer'>
        <Title/>
        </div>
        <br></br>
        <br></br>


        <form onSubmit={handleSubmit}>
            <div className='formContainer'>
        <h1 className='formTitle'>Add your Game to our Library!</h1>
        <h4 className='formsubTitle'> (*Please fill the required information)</h4>
            
                <div className='formNameContainer'>
                    <label > 
                    <h2 className= "labelTitle"> *Name:</h2>
                    
                        <br></br> <br></br>
                        <input placeholder='Insert Game Name' className='formName' type="text" value={input.name} name="name" onChange={handleChange}/>
                            {errors.name && (<p className='error'>{errors.name}</p>)}
                    </label>
                
                <div>
                    <br></br>          
            <label > <h2 className= "labelTitle">image(URL):</h2> 
                <br></br>          
                <br></br>
                    <input placeholder='Insert image URL' className='formName' type= "text" value={input.image} name="image" onChange={handleChange}/>
            </label>
                </div>
            </div>
            
            
            <hr></hr>          

    <div className='formGenresContainer'>
        <label > <h2 className= "labelTitle"> Genres:</h2>
            <br></br><br></br>

            <div className='formGenres' >
                {genres.map(g =>
                    <label  key={g.id}>{g.name} 
                        <input  type= "checkbox" value={g.name} name={g.name} onChange={handleGenreCheck}/>
                    </label>
            )}
            </div>
        </label>
    </div>
        <br></br>          

        <hr></hr>


            <label > <h2 className= "labelTitle">  Platforms:</h2>
                <div className='formPlatforms'>
                
                    <div className='formPc'>
                        <h4 className='labelSubTitle'>PC Games</h4>
                        <label>Windows
                        <input className ="checks" type = "checkbox" value="PC" name = "platforms" onChange={handlePlatformCheck} />
                        </label>

                        <br></br>

                        <label>Linux
                        <input className ="checks" type = "checkbox" value="Linux" name = "platforms" onChange={handlePlatformCheck} />
                        </label>

                        <br></br>

                        <label>macOS
                        <input className ="checks" type = "checkbox" value="macOS" name = "platforms" onChange={handlePlatformCheck} />
                        </label>
                    </div>
                       
                    <div className='formPlayStation'>
                        <h4 className='labelSubTitle'>Sony PlayStation</h4>

                        <label>PlayStation 5
                        <input className ="checks" type = "checkbox" value="PlayStation 5" name= "platforms" onChange={handlePlatformCheck}/>
                        </label>

                        <br></br>
                        
                        <label>PlayStation 4
                        <input className ="checks" type = "checkbox" value="PlayStation 4" name= "platforms" onChange={handlePlatformCheck}/>
                        </label>

                        <br></br>
                        
                        <label>PlayStation 3
                        <input className ="checks" type = "checkbox" value="PlayStation 3" name= "platforms" onChange={handlePlatformCheck}/>
                        </label>

                        <br></br>

                        
                        <label>PlayStation 2
                        <input className ="checks" type = "checkbox" value="PlayStation 2" name= "platforms" onChange={handlePlatformCheck}/>
                        </label>
                    
                    </div>

                        
                    <div className='formXbox'>
                        <h4 className='labelSubTitle'>Microsoft Xbox</h4>
                    
                        <label>Xbox Series S/X
                        <input className ="checks" type= "checkbox" value="Xbox Series S/X" name= "platforms" onChange={handlePlatformCheck}/>
                        </label>

                        <br></br>

                        <label>Xbox One
                        <input className ="checks" type = "checkbox" value="Xbox Series One" name= "platforms" onChange={handlePlatformCheck}/>
                        </label>

                        <br></br>

                        <label>Xbox 360
                        <input className ="checks" type = "checkbox" value="Xbox 360" name= "platforms" onChange={handlePlatformCheck}/>
                        </label>
                    
                    </div>

                    <div className='formMobile'>
                        <h4 className='labelSubTitle'>Mobile Platforms</h4>    

                        <label>Android
                            <input className ="checks" type = "checkbox" value="Android" name= "platforms" onChange={handlePlatformCheck}/>
                        </label>

                            <br></br>

                        <label>iOS
                            <input className ="checks" type = "checkbox" value="iOS" name= "platforms" onChange={handlePlatformCheck}/>
                        </label>

                        <br></br>

                        <label>Nintendo Switch
                            <input className ="checks" type = "checkbox" value="Nintendo Switch" name= "platforms" onChange={handlePlatformCheck}/>
                        </label>

                        <br></br>

                        <label>PS Vita
                            <input className ="checks" type = "checkbox" value="PS Vita" name= "platforms" onChange={handlePlatformCheck}/>
                        </label>

                    </div>    

                </div>
                </label>
                        

        <br></br><hr></hr><br></br>          

        <div className='formReleasedRating'>
            <div>
                <label className='labelTitle'> *Released: 
                 <input className='formReleased' type= "date" value={input.released} name="released" onChange={handleChange}/>
                    {errors.released && (<p className='error'>{errors.released}</p>)}
                </label>
            </div>
        
            <br></br>          
        
        <div>
            <label className= "labelTitle"> *Rating:

                <select className='formRating' onChange={handleSelect}>
                    <option disabled defaultValue="3">Rating 1 to 5</option>
                    <option value={1} name="rating">★☆☆☆☆</option>
                    <option value={2} name="rating">★★☆☆☆</option>
                    <option value={3} name="rating">★★★☆☆</option>
                    <option value={4} name="rating">★★★★☆</option>
                    <option value={5} name="rating">★★★★★</option>
                </select>
                    {errors.rating && (<p className='error'>{errors.rating} </p>)}

            </label>
        </div>
    </div>

            <br></br>          

            <div className='descriptionFormContainer'>
                <label className= "labelTitle"> *Description:
                    <br></br>
                    <textarea className='formDescription' type= "text" placeholder="Please add a description" value={input.description} name="description" onChange={handleChange}/>
                        {errors.description && (<p className='error'>{errors.description}</p>)}
                    </label>
                </div>

            <br></br>     
            <div className='buttonContainer'>

                    <button className='formButton' type='submit' disabled={!input.name || !input.description || !input.released || !input.rating}>Create Game!</button>
                    <NavLink to={"/home"}>
                    <button className='formButton'>Go Back</button>
                    </NavLink>
                
            </div>
        </div>

        </form>
        <br></br>
        <br></br>

        <hr></hr>
        <br></br>
        <br></br>

     <Footer/>
    </div>
  )
  }