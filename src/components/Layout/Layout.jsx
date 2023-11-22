// import React, { Fragment } from "react";

// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import Routers from "../../routers/Routers";

// const Layout = () => {
//   return (
    
//     <Fragment>
//       <Header />
//       <div>
//         <Routers />
//       </div>
//       <Footer />
//     </Fragment>
//   );
// };

// export default Layout;


// Layout.jsx
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';  // Make sure to import Home
import About from '../../pages/About';
import CarListing from '../../pages/CarListing';
import Blog from '../../pages/Blog';
import Contact from '../../pages/Contact';

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cars" element={<CarListing />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Layout;