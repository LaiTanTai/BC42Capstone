import React from 'react';
import Home from './modules/Home/Home';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import MainLayout from './layouts/MainLayout/MainLayout';
import MovieDetails from './modules/MovieDetails/MovieDetails';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import SignIn from './modules/Authentication/SignIn/SignIn';
import SignUp from './modules/Authentication/SignUp/SignUp';
function App() {
  return (
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// give me cat image 