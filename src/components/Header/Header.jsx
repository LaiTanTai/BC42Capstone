import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { FaUserPlus } from 'react-icons/fa';
function MyNavLink({to,children}) {
  return (
    <NavLink className={({isActive,isPending})=>{
      let classes = ["nav-link"];
      if(isActive){
          classes.push("active");
      }
      return classes.join(" ");
    }}  to={to}>
    {children}
    </NavLink>
  )
}

function Header() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <a className="navbar-brand">
      FTick
  </a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className='nav-link'>Trang Chủ</a>
      </li>
      <li className="nav-item">
        <a href='#LichChieu' className='nav-link'>Lịch Chiếu</a>
      </li>
      <li className="nav-item">
        <a href='#cumrap' className='nav-link'>Cụm Rạp</a>
      </li>
    </ul>
    <ul className="navbar-nav">
      <li className="nav-item">
        <MyNavLink to='/Signin'>
          <BsBoxArrowInRight />
          Đăng nhập
        </MyNavLink>
      </li>
      <li className="nav-item">
        <MyNavLink to='/SignUp'>
          <FaUserPlus />
          Đăng ký
        </MyNavLink>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Header