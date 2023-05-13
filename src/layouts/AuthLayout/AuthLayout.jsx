import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import style from './AuthLayout.module.scss'
function AuthLayout() {
  return (
    <>
    <Header/>
    <div className={style.background}>
      <div className={style.container}>
        <div className={style.box}>
          <Outlet/>
        </div>
      </div>
    </div>
    </>
  )
}

export default AuthLayout