import React, { useState } from 'react';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import Register from '../components/UI/Register'; // Import the Owner component
import "../styles/Signup.css";
import Owner from '../pages/Owner';
const SignUp = () => {
  const [registerForm, setRegisterForm] = useState('user');

  return (
    <Helmet title="Signup">
      <section className="p-0">
        <CommonSection title="Register Page" />
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6" md="10" className="m-auto">
              <h4 className="d-flex align-items-center gap-2 justify-content-center mb-5">
                <i className="ri-key-2-line"></i> Sign Up
              </h4>
              <div className=" mb-5 time__line d-flex align-items-center justify-content-between">
                <h6
                  className={` ${
                    registerForm === 'user' ? 'active2' : ''
                  }  line`}
                  onClick={() => setRegisterForm('user')}
                >
                  <span
                    className={` ${registerForm === 'user' ? 'active' : ''}  `}
                    onClick={() => setRegisterForm('user')}
                  >
                    1
                  </span>{' '}
                  User
                </h6>

                <h6
                  className={` ${registerForm === 'owner' ? 'active2' : ''}  `}
                  onClick={() => setRegisterForm('owner')}
                >
                  <span
                    className={` ${
                      registerForm === 'owner' ? 'active' : ''
                    } me-1 `}
                    onClick={() => setRegisterForm('owner')}
                  >
                    2
                  </span>
                  Owner
                </h6>
              </div>

              {registerForm === 'user' ? <Register userType="user" /> : <Owner userType="owner" />}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default SignUp;


