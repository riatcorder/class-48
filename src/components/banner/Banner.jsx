import React from 'react'
import Container from '../Container.jsx'
import Ban from '../../assets/banner.png'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
const Banner = () => {
  return (
    <>
    <div className='bg-ban'>
        <Container className='flex justify-between text-White'>
            <div className='w-1/2 py-35'>
            <h1 className='font-pops text-[45px] pl-5 pr-30 text-base/14'>Building stellar websites for early startups</h1>
            <p  className=' font-pops  text-base/6 pl-5 pt-2 pr-20 mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div className='flex'>
           <div>
             <Link className=' border-1 border-solid border-White hover:bg-banbtn p-3 px-5 rounded-full' to=''>View our work</Link>
           </div>
            <div className='hover:text-banbtn'>
                <Link className='px-5 flex' to=''>View Pricing <FaLongArrowAltRight className='m-2'/> </Link>
            </div>
            </div>
            </div>
            <div className='w-1/2 py-35'>
            <img src={Ban} alt="ban" />
            </div>
        </Container>
    </div>
    </>
  )
}

export default Banner