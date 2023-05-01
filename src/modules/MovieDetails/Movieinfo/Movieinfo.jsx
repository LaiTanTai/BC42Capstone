import React, { useEffect, useState } from 'react'
import { getMovieDetail } from '../../../apis/movieAPI';
function Movieinfo({movieID}) {
  const [Movie,setMovie] = useState();
  const getMovieDetails = async () =>{
    try{
      const data = await getMovieDetail(movieID);
      setMovie(data.content);
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getMovieDetails();
  },[])
  return (
    <div>{Movie.tenPhim}</div>
  )
}

export default Movieinfo