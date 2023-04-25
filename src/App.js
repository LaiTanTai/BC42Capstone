import React from "react";
import Home from "./modules/Home/Home";
import Admin from "./modules/Admin/Admin";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import MovieDetails from "./modules/MovieDetails/MovieDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieID" element={<MovieDetails />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// give me cat image
