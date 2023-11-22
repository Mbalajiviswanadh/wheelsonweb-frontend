import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ForgotPassword.css'; // Import your CSS file for styling
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';


const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the submission of the forgot password form
    // This might include sending a reset password email or some other action
  };

  return (
    <>
    <Helmet title="Forgotpassword">
      <section className='p-0'>
        <CommonSection title="Forgot Password Page"/>
      </section>
      <header className="header">
        {/* Header content, if any */}
       
        
      </header>

      <div className="maincontainer">
        <div className="firstcontainer">
          <div className="titled"></div>
          <div id="forgot-password" style={{ display: "block" }} className="content">
            <h3>Forgot Password?</h3>
            <form onSubmit={handleSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="button">
                <input type="submit" name="submit" id="submit" value="Submit" />
              </div>
            </form><br />

            <div className="additional-links">
              <p>
                Remember your password? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      </Helmet>
    </>
  );
};

export default ForgotPassword;
