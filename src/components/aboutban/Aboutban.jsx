import React from 'react'
import Ban from '../../assets/aboutban.png'
import Container from '../Container.jsx'


const Aboutban = () => {
  return (
    <>
    <div className="">
        <Container>
        <div className="flex">
            <div className='py-40 pr-30 w-1/2'>
            <h4  className='font-pops text-[25px]'>About us</h4>
            <h1 className='font-pops text-[45px] text-base/15 font-bold'>Our designs solve problems</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
        <div className='py-35 w-1/2'>
            <img src={Ban} alt="b" />
        </div>
        </div>
        </Container>
    </div>
    </>
  )
}

export default Aboutban