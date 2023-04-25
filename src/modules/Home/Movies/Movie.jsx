import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { getmovieAPI } from '../../../apis/movieAPI';

function Movie() {
  const [movies,setmovies] = useState([]);
  const getMovies = async ()=>{
    try{
      const data = await getmovieAPI()
      setmovies(data.content);
    } catch (error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getMovies()
  },[])
  return (  
    <div>
      {movies.map((item)=>{
        return (
        <div>
          <p>{item.tenPhim}</p>
          <ReactPlayer url={item.trailer}></ReactPlayer>
        </div>)
      })}
    </div>
  )
}

export default Movie