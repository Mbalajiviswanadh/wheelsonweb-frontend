// import React from 'react';
// import { Form, FormGroup } from 'reactstrap';
// import { Link } from 'react-router-dom';

// const Register = () => {
//   return (
//     <>
//       <Form>
//         <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
//           <span>
//             <i class="ri-user-line"></i>
//           </span>
//           <input type="text" placeholder="Username" required />
//         </FormGroup>
//         <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
//           <span>
//             <i class="ri-mail-line"></i>
//           </span>
//           <input type="email" placeholder="Email" required />
//         </FormGroup>

//         <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
//           <span>
//             <i class="ri-lock-2-line"></i>
//           </span>
//           <input type="password" placeholder="Password" required />
//         </FormGroup>
//         <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
//           <span>
//             <i class="ri-lock-2-line"></i>
//           </span>
//           <input type="password" placeholder="Confirm Password" required />
//         </FormGroup>
//         <h6 className="fs-6  text-center">
//           <label htmlFor="">
//             <input type="checkbox"  style={{textDecoration:"none", fontWeight:'bold' ,color:'#000d6b'}}/> Accept Terms & Conditions
//           </label>
//         </h6>
//         <button className="login__btn " type="submit">
//           Register Now
//         </button>
//       </Form>
//       <h6 className="fs-6 text-center mt-4">
//         <Link style={{textDecoration:"none", fontWeight:'bold' ,color:'#0DC143'}} to="/Login">Already Have an Account?</Link>
//       </h6>
//     </>
//   );
// };

// export default Register;


// // Register.jsx
// import React, { useState } from 'react';
// import { Form, FormGroup, Alert } from 'reactstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Register = ({ userType }) => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match.');
//       return;
//     }

//     axios.post(`http://localhost:4000/register/${userType}`, {
//       username,
//       email,
//       password,
//       confirmPassword,
//     })
//       .then(result => {
//         console.log(result);
//         setSuccessMessage('Successfully Registered');
//         setErrorMessage(null);
//         navigate('/login');
//       })
//       .catch(err => {
//         console.log(err.response.data);
//         setSuccessMessage(null);
//         if (err.response.data.message) {
//           setErrorMessage(err.response.data.message);
//         } else {
//           setErrorMessage('Registration failed. Please try again.');
//         }
//       });
//   };

//   return (
//     <>
//       {successMessage && (
//         <Alert color="success" className="mt-3">
//           {successMessage}
//         </Alert>
//       )}

//       {errorMessage && (
//         <Alert color="danger" className="mt-3">
//           {errorMessage}
//         </Alert>
//       )}

//       <Form onSubmit={handleSubmit}>
//         <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
//           <span>
//             <i className="ri-user-line"></i>
//           </span>
//           <input
//             type="text"
//             placeholder="Username"
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </FormGroup>

//         <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
//           <span>
//             <i className="ri-mail-line"></i>
//           </span>
//           <input
//             type="email"
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </FormGroup>

//         <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
//           <span>
//             <i className="ri-lock-2-line"></i>
//           </span>
//           <input
//             type="password"
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </FormGroup>

//         <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
//           <span>
//             <i className="ri-lock-2-line"></i>
//           </span>
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </FormGroup>

//         <button className="login__btn" type="submit">
//           Register
//         </button>
//       </Form>

//       <h6 className="fs-6 text-center mt-4">
//         <Link style={{ textDecoration: "none", fontWeight: 'bold', color: '#0DC143' }} to="/login">Already Have an Account?</Link>
//       </h6>
//     </>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { Form, FormGroup, Alert } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = ({ userType }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    axios.post(`http://localhost:4000/register/${userType}`, {
      username,
      email,
      password,
      confirmPassword,
    })
      .then(result => {
        console.log(result);
        setSuccessMessage('Successfully Registered');
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
        <Link style={{ textDecoration: "none", fontWeight: 'bold', color: '#0DC143' }} to="/login">Already Have an Account?</Link>
      </h6>
    </>
  );
};

export default Register;
