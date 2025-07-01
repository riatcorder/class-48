import React from 'react'
import Container from '../Container.jsx'
import { Link } from 'react-router-dom'
import Ban from '../../assets/Featureban.svg'

const Featureban = () => {
  return (
    <>
    <div className="bg-ban">
        <Container className='flex text-White'>
            <div className="w-1/2 py-40 pr-10">
                <h1 className='font-pops text-[45px] pl-5 pr-30 text-base/14'>All the features you need</h1>
                <p className='font-pops  text-base/6 pl-5 py-6 pr-20 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link className='border-1 border-solid border-White hover:bg-banbtn p-3 px-5 rounded-full'>View Pricing</Link>
            </div>
            <div className="w-1/2 py-35">
                <img src={Ban} alt="" />
            </div>
        </Container>
    </div>
    </>
  )
}

export default Featureban