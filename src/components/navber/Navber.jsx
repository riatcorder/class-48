import React from 'react'
import Container from '../Container.jsx'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
const Navber = () => {
  return (
    <>
    <div className="bg-Nav">
      <Container className='flex '>
        <div className="logo p-4 lg:w-1/3">
          <img src={Logo} alt="" />
        </div>
        <div className=" lg:w-2/3">
          <div className="flex text-navbtn justify-end ">
          <Link className='p-4 hover:text-White' to='/'>Home</Link>
          <Link className='p-4 hover:text-White' to='/about'>About us</Link>
          <Link className='p-4 hover:text-White' to='/features'>Features</Link>
          <Link className='p-4 hover:text-White' to='/pricing'>Pricing</Link>
          <Link className='p-4 hover:text-White' to='/faq'>FAQ</Link>
          <Link className='p-4 hover:text-White' to='/blog'>Blog</Link>
          <Link className='px-5 py-2 m-2 border-2 border-solid border-White rounded-full hover:bg-White hover:text-Nav' to='/'>Contact us</Link>
          </div>
        </div>
      </Container>
    </div>
    </>
  )
}

export default Navber