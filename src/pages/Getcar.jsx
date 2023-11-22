import React from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import {  useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';


const Getcar = () => {
    const params =useParams()
    const navigate = useNavigate()
    const [image, setImage] = useState('')
    const [carname, setcarName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')


    useEffect(() => {
        const id = params.id
        axios.get(`http://localhost:4000/get-car/${id}`)
            .then(res => {
                console.log(res.data.data, "17")
                setImage(res.data.data.url)
                setcarName(res.data.data.carname)
                setDescription(res.data.data.description)
                setPrice(res.data.data.price)
            })
            .catch(err => {
                console.log(err, "err")
            })
    }, [params.id])


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ id: params.id, url: image, carname, description, price: Number(price) })

        const data = { id: params.id, url: image, carname, description, price: Number(price) }
        axios.post('http://localhost:4000/edit-cars', data)
            .then(res => {
                console.log(res.data, "res")
                if (res.data.code === 200) {
                    navigate('/get/cars')
                }
            })
            .catch(err => {
                console.log(err, "err")
            })
    }


  return (
    <Helmet title="Login">
    <section className="p-0">
    <CommonSection title="Give Car" />
  </section>
  <section>
  <nav class="navbar" style={{maxWidth:"50%",margin:"0px auto"}}>
             <Link to="/get/cars" class="navbar-brand">Back</Link>
          </nav>
    <Container>
      <Row>
        <div class="form-box">
        <Col lg="4" md="6" sm="8" xs="10" className="m-auto">
          <h4 className=" d-flex align-items-center gap-2 justify-content-center mb-5">
            <i class="ri-edit-2-fill"></i> Edit your Car Details
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

export default Getcar
