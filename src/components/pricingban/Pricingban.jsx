import React from 'react'
import Pricecard from '../reuseable/pricecard'
import Container from '../Container'

const Pricingban = () => {
  return (
    <>
    <Container>
        <div className="py-20 px-80">
        <h1 className='font-pops text-[36px] text-base/15 font-bold text-center'>Our Pricing Plans</h1>
        <p className='font-pops text-center'>When you're ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
        </div>
            <div className="flex jusity-between">
                <div className="w-1/3 px-2">
                <Pricecard/>
                </div>
                <div className="w-1/3 px-2">
                <Pricecard/>
                </div>
                <div className="w-1/3 px-2">
                <Pricecard/>
                </div>
            </div>
    </Container>
    
    </>
  )
}

export default Pricingban