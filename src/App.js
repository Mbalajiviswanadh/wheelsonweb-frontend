// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';  // Make sure to import Home
import About from './pages/About';
import CarListing from './pages/CarListing';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/Forgotpassword';
import CarDetails from './pages/CarDetails';
import BlogDetails from './pages/BlogDetails';
import Owner from './pages/Owner';
import Renting from './pages/Renting';
import NotFound from './pages/NotFound';
import Startlogin from './components/Startlogin/Startlogin';
import Getcars from './pages/Getcars';
import Getcar from './pages/Getcar';
import OwnerLogin from './pages/OwnerLogin';
import Bookcar from './components/UI/Bookcar';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/layout/*" element={<Layout />}>
        <Route path="home" index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cars" element={<CarListing />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path='ownerlogin' element={<OwnerLogin/>}/>
      <Route path='bookcar' element={<Bookcar/>}/>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgotpassword" element={<ForgotPassword />} />
      <Route path="cars/:slug" element={<CarDetails />} />
      <Route path="blogs/:slug" element={<BlogDetails />} />
     <Route path="/get/cars" element={<Getcars />} />
       <Route path="/get/car/:id" element={<Getcar/>}/>
      <Route path="owner" element={<Owner />} />
      <Route path="renting" element={<Renting />} />
      <Route path="notfound" element={<NotFound />} />
      <Route path="start" element={<Startlogin />} />
    </Routes>
  );
}

export default App;
