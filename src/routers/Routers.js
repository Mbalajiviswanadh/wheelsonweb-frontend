// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Home from "../pages/Home";
// import About from "../pages/About";
// import CarListing from "../pages/CarListing";
// import CarDetails from "../pages/CarDetails";
// import Blog from "../pages/Blog";
// import BlogDetails from "../pages/BlogDetails";
// import NotFound from "../pages/NotFound";
// import Contact from "../pages/Contact";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import ForgotPassword from "../pages/Forgotpassword";
// import Owner from "../pages/Owner";
// import Renting from "../pages/Renting";
// import Startlogin from "../components/Startlogin/Startlogin";
// import Getcars from "../pages/Getcars";
// import Getcar from "../pages/Getcar";
// import LandingPage from "../components/LandingPage";

// // import Createcar from "../pages/Createcar";
// // import Carslists from "../pages/Carslists";

// // import {initialState, reducer} from "../reducer/UseReducer";  /*added*/
// // import {adminInitialState, adminreducer} from "../reducer/UseReducerAdmin"; /*added*/

// // export const UserContext = createContext();   /*added*/
// // export const AdminContext = createContext(); /*added*/


// const Routers = () => {


//   // const [state, dispatch] = useReducer(reducer, initialState) /*added*/
//   // const [adminState, dispatchadmin] = useReducer(adminreducer, adminInitialState)/*added*/

//   return (
//     <Routes>

//       {/* <UserContext.Provider value={{state, dispatch}}> */}



//       <Route path="start" element={<Startlogin />} />
//       <Route path="/" element={<LandingPage/>} />
//       <Route path="/home/*" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/get/cars" element={<Getcars />} />
//       <Route path="/get/car/:id" element={<Getcar/>}/>
//       <Route path="/Login" element={<Login/>}/>
//       <Route path="/Signup" element={<Signup/>}/>
//       <Route path="/Forgotpassword" element={<ForgotPassword/>}/>
//       <Route path="/cars" element={<CarListing />} />
//       <Route path="/cars/:slug" element={<CarDetails />} />
//       <Route path="/blogs" element={<Blog />} />
//       <Route path="/blogs/:slug" element={<BlogDetails />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="*" element={<NotFound />} />
      

// {/*   
//         <Route path="/create-car" element={<Createcar/>}/>
//         <Route path="/car-list" element={<Carslists/>}/> */}
   

//       {/* </UserContext.Provider> */}

//       {/* <AdminContext.Provider value={{adminState,dispatchadmin}}> */}
      
      
      
//       <Route path="/Owner" element={<Owner/>}/>
//       <Route path="/Renting" element={<Renting/>}/>
      
      
      
//       {/* </AdminContext.Provider> */}
      
//     </Routes>
//   );
// };

// export default Routers;
