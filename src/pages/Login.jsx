import React, { useState } from 'react';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import UserLogin from '../components/UI/UserLogin'; // Import the UserLogin component
import OwnerLogin from '../pages/OwnerLogin'; // Import the OwnerLogin component
import "../styles/Login.css";

const Login = () => {
  const [loginForm, setLoginForm] = useState('user');

  return (
    <Helmet title="Login">
      <section className="p-0">
        <CommonSection title="Login Page" />
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6" md="10" className="m-auto">
              <h4 className="d-flex align-items-center gap-2 justify-content-center mb-5">
                <i className="ri-key-2-line"></i> Sign in
              </h4>
              <div className=" mb-5 time__line d-flex align-items-center justify-content-between">
                <h6
                  className={` ${
                    loginForm === 'user' ? 'active2' : ''
                  }  line`}
                  onClick={() => setLoginForm('user')}
                >
                  <span
                    className={` ${loginForm === 'user' ? 'active' : ''}  `}
                    onClick={() => setLoginForm('user')}
                  >
                    1
                  </span>{' '}
                  User
                </h6>

                <h6
                  className={` ${loginForm === 'owner' ? 'active2' : ''}  `}
                  onClick={() => setLoginForm('owner')}
                >
                  <span
                    className={` ${
                      loginForm === 'owner' ? 'active' : ''
                    } me-1 `}
                    onClick={() => setLoginForm('owner')}
                  >
                    2
                  </span>
                   Become a Owner
                </h6>
              </div>

              {loginForm === 'user' ? <UserLogin userType="user" /> : <OwnerLogin userType="owner" />}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
