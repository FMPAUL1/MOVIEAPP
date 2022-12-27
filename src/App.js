import './App.css';
import { useEffect, useState } from 'react';
import moviescard from './moviescard'

const api_url= "https://cors-anywhere.herokuapp.com/https://www.omdapi.com?apikey=ee4c656f"


function App() {
 const [search , setsearch]=useState("")
 const [movies , setmovies]=useState([])
 
 const searchMovies=async(Title)=>{
  const res = await fetch(`${api_url}&s=${Title}`);
  const data = await res.json();
  setmovies(data.search)
  
  
 };
 useEffect(()=>{
   searchMovies()

  
 },[])



  return (
    <div className="app">
     <h1>ATP MOVIES </h1>
     <div className='search'>
      <input placeholder='search for a movie here'
      value={search} 
      onChange={(e)=>{setsearch(e.target.value)}}
      />
      <button className='btn' onClick={()=>searchMovies(search)}>search</button>
     </div>
      {movies?.length >0 ?(
        <div className='container'>
          {movies.map((movie)=>(
            <moviescard movie={movie}/>

          ))}
          </div>
      ):( 
        <div className='empty'>
          <h2>no movie found yet  </h2>
          </div>
      )}
      </div>
      );
}

export default App;
