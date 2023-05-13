import React from 'react'
import styles from './SignIn.module.scss'
import { useForm } from 'react-hook-form'

function SignIn() {
  const {register,handleSubmit} = useForm({
    // declare initial value for inputs
    defaultValues:{
      taiKhoan:"",
      MatKhau:"",
    },
  })
  const onSubmit = (value)=>{
    console.log(value);
  }
  return (
    <div> 
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className={styles.text}>Đăng Nhập</h4>
        <div className={styles.input_div}>
          <label className={styles.label}>Tài Khoản</label>
          <input className={styles.input} type='text' placeholder='Tài Khoản' {...register("taikhoan")}></input>
        </div>
        <div className={styles.input_div}>
          <label className={styles.label}>Mật Khẩu</label>
          <input
            className={styles.input}
            type='password'
            placeholder='Mật khẩu'
            {...register("MatKhau")}
          />
        </div>
        <div className={styles.checkbox_div}>
          <input type='checkbox'/>
          <p className={styles.span}>Nhớ mật khẩu</p>
        </div>
        <button className={styles.button}>Đăng Nhập</button>
        <a href='/SignUp' className={styles.SignUpNav}>Bạn chưa có tài khoản? Đăng ký</a>
      </form>
    </div>
  )
}

export default SignIn