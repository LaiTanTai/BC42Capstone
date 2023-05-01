import React from 'react'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import { getBannerapi } from '../../../apis/movieAPI';
import './Banner.scss'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react'
function Banner() {
  const [Banner , setBanner]= useState([]);
  const [error,seterror] = useState()
  const getBanner = async () =>{
    try {
      const data = await getBannerapi();
      setBanner(data.content)
    } catch (error) {
      seterror(error.response?.data?.content);
    }
  }
  useEffect(()=>{
    getBanner();
  },[])
  if(error) return null;
  return (
    <Carousel>
    {
      Banner.map((item)=>{
        return (
          <Carousel.Item interval={10000}>
          <div className='imageVideo'>
            <img className='image' src={item.hinhAnh}>
            </img>
            <button className='button'><AiOutlinePlayCircle/></button>
          </div>
          </Carousel.Item>
        )
      })
    }
    </Carousel>
  )
}

export default Banner