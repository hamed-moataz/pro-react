import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import Login from '../pages/Login';

const Nav = () => {

  const userr = useSelector((state)=>state.user.user)

  return (
    <div className='nav'>
      <NavLink  to='Products' ><button className='btn btn-outline-success fs-4  p-2 my-2'>Products</button></NavLink>
      <NavLink  to='cart'><button className='btn btn-outline-success fs-4 p-2 my-2'><FaCartPlus /> cart</button></NavLink>
      {
        JSON.stringify(userr) !=='{}'? <p>Hello: {userr.firstName}</p> : <NavLink to='/'> Login </NavLink>
      }
      <NavLink to='/'>
      <button className='btn btn-outline-success fs-4  p-2 my-2'><i class="fa fa-sign-out" aria-hidden="true"></i> Login</button>
        </NavLink>  
    </div>
  )
}

export default Nav
