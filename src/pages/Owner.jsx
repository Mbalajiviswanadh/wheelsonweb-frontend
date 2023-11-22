import React, { useState } from 'react';
import { Form, FormGroup, Alert } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Owner = ({ userType }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:4000/register/${userType}`, {
      username,
      email,
      phoneNumber,
      country,
      password,
      confirmPassword,
    })
      .then(result => {
        console.log(result);
        setSuccessMessage('Registration Successful');
        setErrorMessage(null);
        navigate('/login'); 
      })
      .catch(err => {
        console.log(err.response.data);
        setSuccessMessage(null); 

        if (err.response.data.message) {
          setErrorMessage(err.response.data.message);
        } else {
          setErrorMessage('Registration failed. Please try again.');
        }
      });
  };

  return (
    <>
      {successMessage && (
        <Alert color="success" className="mt-3">
          {successMessage}
        </Alert>
      )}

      {errorMessage && (
        <Alert color="danger" className="mt-3">
          {errorMessage}
        </Alert>
      )}

<Form onSubmit={handleSubmit}>
        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i className="ri-user-line"></i>
          </span>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i className="ri-mail-line"></i>
          </span>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i className="ri-phone-line"></i>
          </span>
          <input
            type="text"
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i className="ri-earth-line"></i>
          </span>
          <input
            type="text"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
            required
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
          />
        </FormGroup>

        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i className="ri-lock-2-line"></i>
          </span>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </FormGroup>

        <button className="login__btn" type="submit">
          Register
        </button>
      </Form>

      <h6 className="fs-6 text-center mt-4">
        <Link style={{ textDecoration: "none", fontWeight: 'bold', color: '#0DC143' }} to="/login">
          Already Have an Account?
        </Link>
      </h6>
    </>
  );
};

export default Owner;
