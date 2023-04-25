import React from 'react'
import { getBannerapi } from '../../../apis/movieAPI';
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
    <div style={{display:"flex"}}>{
      Banner.map((item)=>{
        return <img height={300} src={item.hinhAnh}></img>
      })
    }
    </div>
  )
}

export default Banner