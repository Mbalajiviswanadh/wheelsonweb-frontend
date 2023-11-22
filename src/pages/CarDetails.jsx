import React, { useEffect, useState } from "react";
import {Divider,DatePicker,Checkbox} from 'antd'
import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';
import '../styles/cardetails.css';
import moment from 'moment'
import logonobg from './logonobg.png';
import { Link } from "react-router-dom";

const {RangePicker} =DatePicker
const CarDetails = () => {
  const [from,setFrom]=useState()
  const [to,setTo]=useState()
  const[totalHours,setTotalHours]=useState()
  const [driver,setDriver]=useState(false)
  const [totalamount,setTotalAmount]=useState(0)
  const { slug } = useParams();



  function onToken(token){
    console.log(token)
  }

  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  useEffect(() => {
    setTotalAmount((prevTotalAmount) => {
      let newTotalAmount = totalHours * singleCarItem.price;
      if (driver) {
        newTotalAmount += 30 * totalHours;
      }
      return newTotalAmount;
    });
  }, [driver,totalHours,singleCarItem,totalamount]);

  function selectTimeSlots(values){
    // console.log(moment(values[0]).format('MMM DD YYYY HH:mm'))
    // console.log(moment(values[1]).format('MMM DD YYYY HH:mm'))
    setFrom(moment(values[0]).format('MMM DD YYYY HH:mm'))
  setTo(moment(values[1]).format('MMM DD YYYY HH:mm'))
  setTotalHours(values[1].diff(values[0],'hours'))
  }
  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    Rs{singleCarItem.price}.00 / Day
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.speed}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.seatType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col>
            <Col>
            <Col>
              <Divider type="horizontal" className="payhere" dashed>
               <h2>Pay Here</h2> 
              </Divider>
              <div className="pay-here-section">
                <h3>Check Out</h3><br/>
                <div className="entry">

                <div className="date-times-section">
                  <RangePicker
                    showTime={{ format: "HH:mm" }}
                    format="MMM DD YYYY HH:mm"
                    onChange={selectTimeSlots}
                  />
                </div>
                <div>
                  <p>
                    Date and Times you selected:
                    <br />
                    <br />
                    <b>
                     From :<span style={{color:'green'}}>{from} </span>  to :<span style={{color:'green'}}>{to}</span> 
                    </b>
                  </p>
                  <Checkbox
                    className="driver-checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDriver(true);
                      } else {
                        setDriver(false);
                      }
                    }}
                  >
                    Driver Required
                  </Checkbox>
                  <h3 className="total-amount-section">Total Amount: <span style={{color:'green'}}>{totalamount}</span> </h3>
                  </div>
                  <Link to="/layout/cars"> 
                  <div className="logo-container">
                   <img id="right-logo-img" src={logonobg} alt="Logo" />
                  </div>
                    </Link>
                  <StripeCheckout
                    shippingAddress
                    currency="India"
                    amount={totalamount * 100}
                    token={onToken}
                    stripeKey="pk_test_51OCJgySBhn6X29cI9Zhric2qzuL8OR697D0acbYdLhH8ilH1UfK0FWhTLMoHukgYy2112zCvBFJu4vnKyeU3EN2E00OZUiSrHF"
                  >
                    <div className="payment text-end mt-5">
                      <button className="checkout-reserve-button">Reserve Now</button>
                    </div>
                  </StripeCheckout>
                </div>
                
              </div>
              
            </Col>
        
          </Col>
          
          </Row>
          
        </Container>
        
      </section>
    </Helmet>
  );
};

export default CarDetails;
