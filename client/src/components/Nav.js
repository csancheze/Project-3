import React from 'react';
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
      <nav className='row p-2 d-flex'>
        <h1 className='col-12 col-md-5 text-center'>Dogsbnb</h1>
        <ul className='col-12 col-md-6 d-flex justify-content-center' id='nav-options'>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: '#6c5b7c'} : {color: 'white'})} to="/home">Home</NavLink>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: '#6c5b7c'} : {color: 'white'})} to="/profile">Profile</NavLink>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: '#6c5b7c'} : {color: 'white'})} to="/contact">Contact Petbnb</NavLink>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: '#6c5b7c'} : {color: 'white'})} to="/signup-user">Login</NavLink>
        </ul>
      </nav>
  )
}

export default Nav;