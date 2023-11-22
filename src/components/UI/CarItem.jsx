import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-center mt-">
            Rs{price}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {speed}
            </span>
          </div>
          
          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>
          
          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;



// import React from "react";

// import { useEffect, useState } from 'react';

// import axios from 'axios';
// import "../../styles/car-item.css";


// const CarItem = (props) => {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // const headers = { Authorization: localStorage.getItem('token') }
//     axios
//       .get('http://localhost:4000/get-cars')
//       .then((res) => {
//          console.log("Data from server:", res.data.data);
//         setData(res.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })


//   // useEffect(()=>{
//   //   const data =async ()=>{
//   //     const datas= await axios.get('http://localhost:4000/get-cars');
//   //     console.log("cars >>>>",datas)
      
//   //   };
//   //   data();
//   // },[]);

//   return (
  
//     <>
//     <div className="cars-container">
//       {data &&
//         data.length > 0 &&
//         data.map((item, index) => (
//           <div className="car-card" key={index}>
//             <img className="car-image" src={item.url} alt="img" />
//             <div className='car-details'>
//             <div className='carinfo'>
//             <p className="car-info">{item.carname} in {item.description}</p>
//             <p className="car-info">Rent Per Day is Rs.{item.price} Only/-</p>
//             </div>
            
           
//         </div>
//                                   </div>
//                                 ))}
//           </div>
    
//     </>
//   );
// };

// export default CarItem;









