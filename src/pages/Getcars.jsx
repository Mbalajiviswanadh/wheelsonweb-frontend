import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Getcars.css'; // Import your CSS file for styling
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Link } from 'react-router-dom';
const GetCars = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [deleteData,setDeleteData] =useState([])
  const [refresh,setRefresh] =useState(false)



  console.log(deleteData, "deletedata")

  console.log(data, "8")
  useEffect(() => {
    // const headers = { Authorization: localStorage.getItem('token') }
    axios
      .get('http://localhost:4000/get-cars')
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh])


  const handleDelete = () => {
    const data = deleteData
    axios.post('http://localhost:4000/delete-cars', data)
        .then(res => {
            console.log(res.data, "27")
            if (res.data.code === 200) {
                setRefresh(!refresh)
            }
        })
        .catch(err => {
            console.log(err, "30")
        })

}

  return (
    <Helmet title="Login">
    <section className="p-0">
    <CommonSection title="Your Cars" />
  </section>
  <nav className="navbar" style={{ maxWidth: "90%", margin: "0px auto", display: "flex", justifyContent: "space-between" }}>
  {deleteData.length > 0 && (
    <div style={{ marginRight: '20px' }}>
      <button className="edit-button" onClick={handleDelete}>DELETE SELECTED</button>
    </div>
  )}
  <div className="backlinks" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
    <Link to="/Renting" className="back-button">Add Cars</Link>
    <Link to="/layout/home" className="back-button" style={{ marginLeft: '20px' }}>Back to Home</Link>
  </div>
</nav>



    <div className="cars-container">
      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          <div className="car-card" key={index}>
            <img className="car-image" src={item.url} alt="img" />
            <div className='car-details'>
            <div className='carinfo'>
            <p className="car-info"><span style={{fontWeight:'bold',color:'#000d6b'}}>Car Name: </span>{item.carname}</p>
            <p className="car-info"><span style={{fontWeight:'bold',color:'#000d6b'}}>Description: </span>{item.description}</p>
            <p className="car-info"><span style={{fontWeight:'bold',color:'#000d6b'}}>Rent Per Day: </span> <span style={{color:'green'}}>Rs.{item.price}</span> Only/-</p>
            </div>
            
            <div className="edit-delete-container">
                  <button
                        className="edit-button"
                        onClick={() => {
                          console.log(item._id, '45');
                          navigate(`/get/car/${item._id}`);
                        }}>
                       EDIT
                            </button>
                            <input
                              className="checkbox"
                              onChange={(e) => {
                                if (e.target.checked === true) {
                                  setDeleteData([...deleteData, item._id])
                                } else {
                                  setDeleteData(deleteData.filter(s => s !== item._id))
                                }
                              }}
                              type="checkbox"
                              id={`delete-${index}`}
                            />
                            
                            <label htmlFor={`delete-${index}`}>Delete
                              {/* <i className="ri-delete-bin-line"></i>  */}
                            </label>
                          </div>
                          </div>
                                  </div>
                                ))}
          </div>
    </Helmet>
  );
};

export default GetCars;
