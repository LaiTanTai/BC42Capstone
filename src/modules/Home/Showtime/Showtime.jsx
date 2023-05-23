import React, { useEffect, useState } from 'react'
import { Menu } from 'antd';
import './Showtime.scss'
import { getCinematicByFilm, getCinematicBySystem, getCinematicdata } from '../../../apis/axiosCinematic';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
function Showtime() {
  const [cinema,setCinema] = useState([]);
  const [keyfilmdata,setKeyfilmdata] = useState([]);
  const [datafilm,setDatafilm] = useState([])
  const [cinemafilm,setCinemafilm] = useState();
  const [key,setKey] = useState("bhd-star-cineplex");
  const getCinema = async()=>{
    try {
      const data = await getCinematicdata();
      console.log(data)
      const items = data.content.map((item)=>{
        return (
          getItem('',item.biDanh,<img className='img-fluid w-15 h-100' src={item.logo}/>)
        )
      })
      console.log(items)
      setCinema(items)
    } catch (error) {
      console.log(error.message);
    }
  }
  const getcinemabyfilm = async()=>{
    try {
      const data = await getCinematicByFilm(key);
      setDatafilm(data.content)
    } catch (error) {
      console.log(error.message);
    }
  }
  const getCinemabusystem = async()=>{
    try {
      const data = await getCinematicBySystem(key)
      const items = data.content.map((item) =>{
        return (
          getItem(<button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="w-100" style={{border:"0px",backgroundColor:"transparent",fontSize:"8px",fontWeight:"700" ,textAlign:"left"}}><p style={{height:"10px",marginBottom:"2px",fontSize:"15px"}}>{item.tenCumRap}</p>{item.diaChi}</button>,item.maCumRap,'')
        )
      })
      setCinemafilm(items)
    } catch (error) {
      console.log(error.message)
    }
  }
  const checkfilmdetail = (e) =>{
    setKeyfilmdata(e.key)
  }
  const checkcinema = (e) => {
    setKey(e.key);
  };
  useEffect(()=>{
    getcinemabyfilm();
  },[keyfilmdata])
  useEffect(()=>{
    getCinema();
  },[])
  useEffect(()=>{
    getCinemabusystem();
  },[key])
  return (
    <div className='container' id='cumrap'>
      <h1 className='text-center color'>Cụm Rạp</h1>
      <div className='d-flex justify-content-center'>
        <Menu
          onClick={checkcinema}
          style={{width:80}}
          defaultSelectedKeys={['1']}
          items={cinema}
        />
        <Menu
          onClick={checkfilmdetail}
          style={{width:300}}
          defaultSelectedKeys={['1']}
          items={cinemafilm}
        />
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Danh Sách Phim</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                {
                  datafilm.map((CumRap)=>{
                    return(
                      CumRap.lstCumRap.map((item)=>{
                        return(
                          item.danhSachPhim.map((film,index)=>{
                            if(index < 15){
                              return (
                              <div className='mb-2 d-flex' style={{gap:"20px"}}>
                              <div style={{width:'200px', height:'200px'}}>
                                <img className='w-100 h-100'  src={film.hinhAnh}/>
                              </div>
                                <div className='w-100'>
                                  <h5 style={{fontWeight:"700"}}>{film.tenPhim}</h5>
                                  <div className='row'>
                                  <p style={{margin:"1px 0px 1px 0px"}}>Ngày khởi chiếu</p>
                                    {
                                      film.lstLichChieuTheoPhim.map((value,index)=>{
                                        if(index < 4){
                                          return (
                                        
                                          
                                          <a className="col-6 text-success" style={{fontSize:"13px"}}>{value.ngayChieuGioChieu}</a>
                                          
                                          )
                                        }
                                      })
                                    }
                                    <a className='text-danger' style={{fontSize:"15px"}}>Chi tiết</a>
                                  </div>
                                </div>
                              </div>
                            )    
                            }
                          })
                        )
                      })
                    )
                  })
                }
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };
export default Showtime