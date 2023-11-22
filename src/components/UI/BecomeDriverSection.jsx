import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../assets/all-images/toyota-offer-2.png";

// const BecomeDriverSection = () => {
//   return (
//     <section className="become__driver">
//       <Container>
//         <Row>
//           <Col lg="6" md="6" sm="12" className="become__driver-img">
//             <img src={driverImg} alt="" className="w-100" />
//           </Col>

//           <Col lg="6" md="6" sm="12">
//             <h2 className="section__title become__driver-title">
//               Do You Want to Earn With Us? So Don't Be Late
//             </h2>

//             <button className="btn become__driver-btn mt-4">
//              <Link to="/get/cars">Give a Rent</Link> 
//             </button>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default BecomeDriverSection;



import { useNavigate } from "react-router-dom";
// import OwnerLogin from '../../pages/OwnerLogin';
// import { useState } from "react";

const BecomeDriverSection = () => {
  // const [loginForm, setLoginForm] = useState('owner');
  const navigate = useNavigate();

  // const handleGiveRentClick = () => {
  //   // Redirect to the OwnerLogin page
  //   navigate("/login");
  // };

  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>
            <button className="btn become__driver-btn mt-4" onClick={() => navigate('/login')}>
              Give a Rent
            </button>
            {/* {
            loginForm === 'owner' && <OwnerLogin userType="owner" />
            } */}
            

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
