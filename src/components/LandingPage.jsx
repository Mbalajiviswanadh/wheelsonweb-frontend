import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './LandingPage.css';

import logoImage from './logonobg.png';

const LandingPage = () => {
  return (
    <div className="landing-page-container" >
      <Container>
    

        <Row className="justify-content-center align-items-center web-section">
          <Col lg="6" md="6" sm="6" className="web-text-center web-img">
            <div className='back'>
            <img src={logoImage} alt="Logo" className="web-image img-fluid" />
            </div>
          </Col>
          <Col lg="6" md="6" sm="6" className="web-text-center">
            <div className='matter'>
            <h1 className="web-title">
              <span className="web-title-part" style={{ color: '#333', fontWeight: 'bold' }}>
                Wheels
              </span>
              <span className="web-title-part" style={{ color: '#0DC143', fontWeight: 'bold' }}>
                OnWeb
              </span>
              <span className="web-title-part" style={{ color: '#000d6b', fontWeight: 'bold' }}>
                .
              </span><br/>
            </h1>
            <p className="subtitle">Best offers and variety of cars for your need!</p>
            <p className="subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In explicabo quidem repudiandae vero officia, at illo non laboriosam libero neque, doloremque fugit ullam.</p>
            <p className='subtitle'>Book Now!</p>
            </div>
            <div className='buttons'>
            <Link to="/login" className='rentnow' style={{marginRight:'5%'}}>
              <Button  >
                Rent Now!
              </Button>
            </Link>

            <Link to="/login" className='earnwithus' >
              <Button >
                Earn With Us
              </Button>
            </Link>
            <Row>
            <Link to="/Signup" className='registernow' style={{marginTop:'10%'}}>
              <Button>
                Register Now
              </Button>
            </Link>
            </Row>
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;


// import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import './LandingPage.css';

// // Import the image
// import logoImage from './logonobg.png';

// const LandingPage = () => {
//   return (
//     <div style={{ position: 'relative', backgroundColor: '#c8e6c9',paddingTop: '20px' , minHeight: '100vh' }}>
      
//       <Container>

//         <Row className='topbar'>
//           <Col lg="6" md="6" sm="6">
//             {/* Your existing header content */}
//             <div className="header__top__left">
//               <span>Need Help?</span>
//               <span className="header__top__help">
//                 <i className="ri-phone-fill"></i> +91 9993334488
//               </span>
//             </div>
//           </Col>

//           <Col lg="6" md="6" sm="6">
//             <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
//               <Link to="/Login" className="d-flex align-items-center gap-1">
//                 <i className="ri-login-circle-line icon"></i> Login
//               </Link>

//               <Link to="/Signup" className="d-flex align-items-center gap-1">
//                 <i className="ri-user-line"></i> Register
//               </Link>
//             </div>
//           </Col>
//         </Row>

//         {/* Center the image in the middle of the page */}
//         <Row className="justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
//           <Col lg="6" md="6" sm="6" className="text-center">
//             <img src={logoImage} alt="Logo" className="logo-image" />
//           </Col>
//           <Col lg="6" md="6" sm="6" className="text-center">
//             <h1 className="title"><span style={{color:'#000000',fontWeight:'bold'}}>Wheels</span><br/><span style={{color:'#0DC143',fontWeight:'bold'}}>OnWeb</span><span style={{color:'#fff',fontWeight:'bold'}}>.</span></h1>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default LandingPage;


// import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';

// // Import the image
// import logoImage from './logonobg.png';

// const LandingPage = () => {
//   return (
//     <div style={{ position: 'relative', backgroundColor: '#c8e6c9', minHeight: '100vh' }}>

//       <Container>
//         <Row>
//           <Col lg="6" md="6" sm="6">
//             {/* Your existing header content */}
//             <div className="header__top__left">
//               <span>Need Help?</span>
//               <span className="header__top__help">
//                 <i className="ri-phone-fill"></i> +91 9993334488
//               </span>
//             </div>
//           </Col>

//           <Col lg="6" md="6" sm="6">
//             <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
//               <Link to="/Login" className="d-flex align-items-center gap-1">
//                 <i className="ri-login-circle-line icon"></i> Login
//               </Link>

//               <Link to="/Signup" className="d-flex align-items-center gap-1">
//                 <i className="ri-user-line"></i> Register
//               </Link>
//             </div>
//           </Col>
//         </Row>

//         {/* Center the image in the middle of the page */}
//         <Row className="justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
//           <Col lg="6" md="6" sm="6" className="text-center">
//             <img src={logoImage} alt="Logo" style={{ maxWidth: '500%' }} />
//           </Col>
//         </Row>
//       </Container>
//       </div>
//   );
// };

// export default LandingPage;
