import React from 'react'
import Container from '../Container.jsx'
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom'
const Pricecard = () => {
  return (
    <>
    <div className=''>
            <div className=' py-10 pl-5 bg-price hover:bg-ban hover:text-White rounded-xl'>
                <div className="flex">
                    <h1 className='font-pops text-[20px]'>$299</h1>
                    <p className='font-pops text-[12px] p-2 text-Royel font-bold'>Per Design</p>
                </div>
                <div className="py-4">
                    <h2 className='font-pops'>Landing Page</h2>
                    <p className='font-pops font-pops text-[11px]'>When you’re ready to go beyond prototyping in Figma, </p>
                </div>
                <div className="py-10">
                    <div className="flex py-2">
                        <IoMdArrowDropright/>
                        <p className='font-pops text-[11px]'>All limited links</p>
                    </div>
                    <div className="flex py-2">
                        <IoMdArrowDropright/>
                        <p className='font-pops text-[11px]'>Own analytics platform</p>
                    </div>
                    <div className="flex py-2">
                        <IoMdArrowDropright />
                        <p className='font-pops text-[11px]'>Chat support</p>
                    </div>
                    <div className="flex py-2">
                        <IoMdArrowDropright/>
                        <p className='font-pops text-[11px]'>Optimize hashtags</p>
                    </div>
                    <div className="flex py-2 pb-6">
                        <IoMdArrowDropright />
                        <p className='font-pops text-[11px]'>Unlimited users</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link to='/' className='font-pops py-3 px-10 text-White text-center bg-Dark hover:bg-banbtn rounded-full'>Get started</Link>
                </div>
            </div>
    </div>
    </>
  )
}

export default Pricecard