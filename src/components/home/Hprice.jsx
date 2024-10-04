import React from 'react'
import { PriceCard } from '../pricing/PriceCard'
import { Title } from '../common/title/Title'

export const Hprice = () => {
  return (
    <>
    <section className='hprice padding'>
    <Title subtitle="our pricing" title="pricing & packages"/>

            <div className="pricw container grid"> 
            <PriceCard/>
            </div>
     </section>
    </>
  )
}
