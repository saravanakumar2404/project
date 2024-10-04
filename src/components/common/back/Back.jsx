import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import "./back.css"

export const Back = ({title}) => {
    const location = useLocation()
  return (
    <>
        <section className='back'>
            <h2>Home / {location.pathname.split("/")[1]}</h2>
            <h1 className='heading'>{title}</h1>
        </section>
        <div className="margin"></div>
    </>
  )
}
