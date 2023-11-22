// import React from 'react'

// const Startlogin = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Startlogin




import React, { useState } from 'react';
// import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
// import Helmet from '../components/Helmet/Helmet';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../styles/Login.css';

const Startlogin = () => {
  const [email,setEmail]=useState()
  const [password, setPassword]=useState()

  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('',{email,password})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))

  }

  return (
  
      <section>
        <Container>
          <Row>
            <div class="form-box">
            <Col lg="4" md="6" sm="8" xs="10" className="m-auto">
              <h4 className=" d-flex align-items-center gap-2 justify-content-center mb-5">
                <i class="ri-key-2-line"></i> Sign In
              </h4>

              <Form onSubmit={handleSubmit}>

                
              <div class="label"><span htmlFor="email">Email</span></div>
                <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
                  <span>
                    <i class="ri-user-line"></i>
                  </span>
                  <input  type="text" placeholder="Username or Email" onChange={(e)=>setEmail(e.target.value)}  />
                </FormGroup>
                <div class="label"><span htmlFor="password">Password</span></div>

                <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
                  <span>
                    <i class="ri-lock-2-line"></i>
                  </span>
                  <input type="email" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required />
                </FormGroup>
                <h6  className="fs-6  text-end">
                  <Link style={{textDecoration:"none"}} to="/Forgotpassword">Forgot Password?</Link>
                </h6>
                <button className="login__btn " type="submit">
                  Login
                </button>
              </Form>
              <h6 className="fs-6 text-center mt-4 ">
                <Link to="/signup">Do you need an Account?</Link>
              </h6>
            </Col>
            </div>
          </Row>
        </Container>
      </section>
    
  );
};

export default Startlogin;
