import React from 'react'
import "./hero.css"
import {Title} from '../../common/title/Title'

export const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container">
           <div className="row">
            <Title subtitle='WELCOME TO ACDAEMIA' title="Best Online Education"/>
             <p>Education is an important tool which is very useful in everybody's life. Education is what differentiates us from other living beings on earth. It makes man the smartest creature on earth. It empowers humans and gets them ready to face challenges of life efficiently.</p>
             <div className="button">
             <button className="primary-btn">
              GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
             </button>
             <button >
              VIEW COURES <i className='fa fa-long-arrow-alt-right'></i>
             </button>
            </div>   
         </div>
        </div>
      </section>
      <div className="margin">
     
      </div>
    </>
  )
}
