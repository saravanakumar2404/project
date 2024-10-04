import React from 'react'
import "./contact.css"
import { Back } from '../common/back/Back'


export const contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21051576.8695772!2d76.68703046701438!3d24.3740938796447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726672896904!5m2!1sen!2sin'
  return (
    <>
     <Back  title="Contact Us"/>
     <section className='contact padding'> 
      <div className='container shadow flexSB'>
       <div className="left row">
        <iframe src={map}></iframe>
       </div>
       <div className='right row'>
        <h1>Contact Us</h1>
        <p>Our academic loaction is pinned here.</p>
        <div className='items grid2'>
            <div className='box'>
                <h4>ADDRESS: </h4>
                <p> 24 west 4th street,chennai 20 annanagar 625004.</p>
            </div>
            <div className='box'>
                <h4>Email: </h4>
                <p>Info@gmail.com</p>
            </div>
            <div className='box'>
                <h4>PHONE: </h4>
                <p>+91 637 459 0929</p>
            </div>
        </div>
        <form action=''>
            <div className='flexSb'>
             <input type='text' placeholder='Name' />
             <input type='email' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'>
                Create a message here ...
            </textarea>
            <button className='primary-btn'>SEND MESSAGE</button>
        </form>
          <h3>Follow us here</h3>
          <span>FACEBOOK TWITTER INSTAGRAM WHATSAPP</span>
       </div>
      </div>
     </section>
    </>
  )
}
