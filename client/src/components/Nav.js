import React from 'react';
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/navbar.css';


const Nav = () => {
  return (
      <nav>
        <Container>
        <Row>
        <Col sm={12} md={6} lg={4}>
        <h1 id='app-name'>Woofstel</h1>
        </Col>
        <Col sm={12} md={6} lg={8}>
        <ul id='nav-options' className='m-0'>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: '#83580b', backgroundColor: '#fde994', borderRadius: '10px'} : {color: 'white'})} to="/">Home</NavLink>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: '#83580b', backgroundColor: '#fde994', borderRadius: '10px'} : {color: 'white'})} to="/profile">Profile</NavLink>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: '#83580b', backgroundColor: '#fde994', borderRadius: '10px'} : {color: 'white'})} to="/contact">Contact us</NavLink>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: '#83580b', backgroundColor: '#fde994', borderRadius: '10px'} : {color: 'white'})} to="/login-user">Login</NavLink>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: '#83580b', backgroundColor: '#fde994', borderRadius: '10px'} : {color: 'white'})} to="/logout-user">Logout</NavLink>
        </ul>
        </Col>
        </Row>
        </Container>
      </nav>
  )
}

export default Nav;