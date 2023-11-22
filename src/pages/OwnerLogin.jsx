import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormGroup, Alert } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet'; // Adjust the import path based on your directory structure
import axios from 'axios';

const OwnerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const result = await axios.post('http://localhost:4000/ownerloginSchema', { email, password });
      console.log(result);

      setErrorMessage(null);
      navigate('/get/cars');
    } catch (error) {
      console.error(error);

      setErrorMessage('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Helmet title="Owner Login">
      <section>
        <div className="form-box m-auto">

          <Form onSubmit={handleSubmit} style={{marginLeft:'auto',marginRight:'auto'}}>
            {errorMessage && (
              <Alert color="danger" className="mt-3">
                {errorMessage}
              </Alert>
            )}

            <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
              <span>
                <i className="ri-user-line"></i>
              </span>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </FormGroup>

            <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
              <span>
                <i className="ri-lock-2-line"></i>
              </span>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </FormGroup>

            <h6 className="fs-6 text-end">
              <Link style={{ textDecoration: "none", fontWeight: 'bold', color: '#0DC143' }} to="/owner-forgot-password">
                Forgot Password?
              </Link>
            </h6>

            <button className="login__btn" type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </Form>

          <h6 className="fs-6 text-center mt-4">
            <Link style={{ textDecoration: "none", fontWeight: 'bold', color: '#0DC143' }}  to="/signup">Need an Account?</Link>
          </h6>
        </div>
      </section>
    </Helmet>
  );
};

export default OwnerLogin;