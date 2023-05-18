import React, { Suspense ,lazy } from 'react';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import MainLayout from './layouts/MainLayout/MainLayout';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import AdminLayout from './layouts/AdminLayout/AdminLayout';
import Admin from './modules/Admin/Admin';

const Home = lazy(() => import("./modules/Home/Home"));
const MovieDetails = lazy(() => import("./modules/MovieDetails/MovieDetails"));
// const Booking = lazy(() => import("./modules/Booking/Booking"));
const SignIn = lazy(() => import("./modules/Authentication/SignIn/SignIn"));
const SignUp = lazy(() => import("./modules/Authentication/SignUp/SignUp"));
function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies/:movieID' element={<MovieDetails/>}/>
        </Route>
        <Route path='/' element={<AuthLayout/>}>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
        </Route>
        <Route path='/Admin' element={<AdminLayout/>}>
          <Route path='/Admin' element={<Admin/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;
// give me cat image 