import React from "react";
import Home from "./modules/Home/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import MovieDetails from "./modules/MovieDetails/MovieDetails";
import Booking from "./modules/Booking/Booking";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieID" element={<MovieDetails />}></Route>
          <Route path="/booking/:movieID" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// give me cat image
