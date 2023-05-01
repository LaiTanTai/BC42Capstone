import React from 'react'
import style from './MainLayout.module.scss'
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import { NavLink, Outlet } from 'react-router-dom'
function MainLayout() {
  return (
    <div className={style.container}>
        <Header/>

        <Outlet/>

        <Footer/>
    </div>
  )
}

export default MainLayout