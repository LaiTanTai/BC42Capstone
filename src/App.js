import React, { Suspense, lazy } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import Booking from "./modules/Booking/Booking";
import TheaterDetails from "./theaterDetails/TheaterDetails";

const Home = lazy(() => import("./modules/Home/Home"));
const MovieDetails = lazy(() => import("./modules/MovieDetails/MovieDetails"));
const Admin = lazy(() => import("./modules/Admin/Admin"));
// const Booking = lazy(() => import("./modules/Booking/Booking"));
const SignIn = lazy(() => import("./modules/Authentication/SignIn/SignIn"));
const SignUp = lazy(() => import("./modules/Authentication/SignUp/SignUp"));
function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        z
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies/:movieID" element={<MovieDetails />} />
            <Route path="/theater/:theaterID" element={<TheaterDetails />} />
            <Route
              path="/booking/:bookingID"
              element={
                <ProtectedRoute>
                  <Booking />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Route>
          <Route path="/Admin" element={<AdminLayout />}>
            <Route path="/Admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
// give me cat image
