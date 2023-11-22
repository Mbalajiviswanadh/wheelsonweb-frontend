import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import logonobg from './logonobg.png';
// import { cartUiAction } from '../store/cartUi-Slice';


const navLinks = [
  {
    path: "/layout/home",
    display: "Home",
  },
  {
    path: "/layout/about",
    display: "About",
  },
  {
    path: "/layout/cars",
    display: "Cars",
  },

  {
    path: "/layout/blogs",
    display: "Blog",
  },
  {
    path: "/layout/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef();
  // const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  // const menuToggle = () => menuRef.current.classList.toggle('menu__active');
  

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
      <Container>
          <Row>
          <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line icon"></i> Logout
                </Link>
      </div>
      </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/layout/home" className=" d-flex align-items-center gap-2">
                  <img id="logo-img" src={logonobg} alt="Logo" style={{ width: '80px', height: '80px' }} />
                    <span class="wheelsonweb-size">
                     <h4 style={{ fontWeight:"bold"}} id="green-col">Wheels</h4>
                     OnWeb.
                    </span>
                  </Link>
                  
                </h1>
              </div>
            </Col>
              
            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>India</h4>
                  <h6>any where you want to go!</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <div class="call-btn">
              <button className="header__btn btn ">
                <Link to="/layout/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div className="header__bottom">
        <Container>
          <div className="menu__container d-flex justify-content-between align-items-center">
            <span className="menu__bar">
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
            <div className="menu__list" ref={menuRef} onClick={menuToggle}>
              <div className="menu__left">
                {navLinks.map((item, index) => (
                  <NavLink
                    className={navClass =>
                      navClass.isActive ? 'active me-4 ' : 'me-4'
                    }
                    key={index}
                    to={item.path}
                  >
                    {item.text}
                  </NavLink>
                ))}
              </div>
            </div>
            </div>

            </Container>
            </div> */}

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div> */}
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;

