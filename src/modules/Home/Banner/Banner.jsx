import React from 'react'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import { getBannerapi } from '../../../apis/movieAPI';
import './Banner.scss'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react'
function Banner() {
  const [Banner , setBanner]= useState([]);
  const Videodemo = [
    <iframe className='w-100' height="300" src="https://www.youtube.com/embed/8jraVtX821Q" title="BÀN TAY DIỆT QUỶ | TRAILER | KHỞI CHIẾU 09.04.2021" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    <iframe className="w-100" height="300" src="https://www.youtube.com/embed/kBY2k3G6LsM" title="LẬT MẶT: 48H - Ly Hai Production | Official Trailer | Khởi Chiếu 16.04.2021" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    <iframe className='w-100' height="300" src="https://www.youtube.com/embed/utjE8wTF0qE" title="MORTAL KOMBAT Official Trailer (2021)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
  ]
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
            <button className='button' data-bs-toggle="modal" data-bs-target={"#exampleModalCenter" + item.maBanner}><AiOutlinePlayCircle/></button>
            <div className="modal fade" id={"exampleModalCenter" + item.maBanner} tabIndex={item.maBanner} aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content background-video">
                  <div className="modal-body">
                    <button type="button" className="btn video__button-modal" data-bs-dismiss="modal" aria-label="Close" >x</button>
                    {Videodemo[item.maBanner-1]}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Carousel.Item>
        )
      })
    }
    </Carousel>   
  )
}

export default Banner