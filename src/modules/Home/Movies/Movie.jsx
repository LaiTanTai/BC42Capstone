import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Movie.scss'
import { getmovieAPI } from '../../../apis/movieAPI';
import { Card} from 'antd';
function Movie() {
  const [movies,setmovies] = useState([]);
  const navigate = useNavigate();
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
    <div className='container' id='LichChieu'>
      <h1 className='text-center color mt-5 mb-3'>Lịch Chiếu</h1>
      <div className='row justify-content-center'>
          {
            movies.map((item)=>{
              return <div className='col-lg-3 col-md-4 col-sm-6'>
                      <div className="card mb-2">
                        <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="..." />
                      </div>
                    </div>
            })
          }
      </div>
      </div>
  )
}

export default Movie