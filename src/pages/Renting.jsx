import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import axios from "axios"
import { Link } from 'react-router-dom';
import { useState } from "react"
 import { useNavigate } from "react-router-dom"

const Renting = () => {
    const navigate = useNavigate()
    const [image, setImage] = useState('')
    const [carname, setcarName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')


    const handleSubmit = (e) => {
              e.preventDefault()
              console.log({ image: image, carname, description,  price })
      
              const data = { url: image, carname, description,  price }
              axios.post('http://localhost:4000/add-cars', data)
                  .then(res => {
                      console.log(res)
                      if (res.data === 'saved') {
                          navigate('/get/cars')
                      }
                  })
                  .catch(err => {
                      console.log(err)
                  })
      
          }

  return (
    <Helmet title="Login">
      <section className="p-0">
      <CommonSection title="Give Rent" />
    </section>
    <section>
    <nav class="navbar" style={{maxWidth:"90%",margin:"0px auto"}}>
            <Link to="/get/cars"  class="back-button">Back to List</Link> 
    </nav>
      <Container>
        <Row>
          <div class="form-box">
          <Col lg="4" md="6" sm="8" xs="10" className="m-auto">
            <h4 className=" d-flex align-items-center gap-2 justify-content-center mb-5">
              <i class="ri-car-line"></i> Add Your Car
            </h4>

            <Form onSubmit={handleSubmit}>



            <div class="label">Image:</div>
              <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
              
                    <input
                    className="inputs"
                    type="text"
                    onChange={(e) => setImage(e.target.value)}
                    value={image} required={true} />

              </FormGroup>

              <div class="label">Car Name:</div>
              <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
              
                    <input
                    className="inputs"
                    type="text"
                    onChange={(e) => setcarName(e.target.value)}
                    value={carname} required={true} />

              </FormGroup>


              <div class="label">Any Description:</div>
              <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
              
                    <input
                    className="inputs"
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description} required={true} />

              </FormGroup>

              <div class="label">Price</div>
              <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
              
                    <input
                    className="inputs"
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price} required={true} />

              </FormGroup>
                 <button className="login__btn " type="submit"> Submit </button>

            </Form>
          </Col>
          </div>
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default Renting


// import axios from "axios"
// import { useState } from "react"
// // import { useNavigate } from "react-router-dom"


// function Renting() {
//     // const navigate = useNavigate()
//     const [image, setImage] = useState('')
//     const [carname, setcarName] = useState('')
//     const [description, setDescription] = useState('')
//     const [price, setPrice] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log({ image: image, carname, description,  price })

//         const data = { url: image, carname, description,  price }
//         axios.post('http://localhost:4000/add-cars', data)
//             .then(res => {
//                 console.log(res)
//                 // if (res.data === 'saved') {
//                 //     navigate('#')
//                 // }
//             })
//             .catch(err => {
//                 console.log(err)
//             })

//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 Image :     <input
//                     className="inputs"
//                     type="text"
//                     onChange={(e) => setImage(e.target.value)}
//                     value={image} required={true} />
//                 <br />

//                 Name :  <input className="inputs"
//                     type="text"
//                     onChange={(e) => setcarName(e.target.value)}
//                     value={carname} /> <br />

//                 category :    <input
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     className="inputs"
//                     type="text" /> <br />

           

//                 Price :    <input
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     className="inputs" type="number" /> <br />

//                 <button type="submit"> Submit </button>
//             </form>
//         </div>
//     )
// }

// export default Renting
























// import React from 'react';
// // import {Col, Row,Form,Input} from 'antd';
// import Helmet from '../components/Helmet/Helmet';
// import CommonSection from '../components/UI/CommonSection';
// import { Link } from 'react-router-dom';

// const Renting = () => {
  
 
//   // function onFinish(values){
//   //   console.log(values)
//   // }

//   return (
//     <Helmet title="Renting">
//       <section className="p-0">
//         <CommonSection title="Give Rent "/>
//       </section>
    
//     {/* <div className='text-center '>
//       <Row>
//         <Col lg={12} sm={24}>
//           <Form className='bs1 p-2' layout='vertical' onFinish={onFinish}>
//             <h3>Add New Car</h3>
//             <hr/>
//             <Form.Item name="name" label="car name" rules={[{required:true}]}>
//               <Input/>
//             </Form.Item>

//             <Form.Item name="image" label="Image Url" rules={[{required:true}]}>
//               <Input/>
//             </Form.Item>

//             <Form.Item name="rentPerHour" label="Rent Per Hour" rules={[{required:true}]}>
//               <Input/>
//             </Form.Item>
//             <div class="add-car-btn">
//             <button className='btn1'>ADD CAR</button>
//             </div>
//           </Form>
//         </Col>
//       </Row>
//     </div> */}


//     <nav class="navbar" style={{maxWidth:"70%",margin:"0px auto"}}>
//       <Link to="/Renting" class="navbar-brand">Admin page</Link>

//       <div class="nav">
//         <Link to="/create-car" class="nav-link">Add Car</Link>
//         <Link to="/car-list" class="nav-link">Car List</Link>
//       </div>
//     </nav>
//     </Helmet>
//   )
// }

// export default Renting;



