import React from 'react'
import "../css/work.css";
 
import Footer from './Footer.jsx';

const Work = () => {
    
   

  return (
    <>
 <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Work</h1>
            <p className='primary-text'>
            we understand the importance of good service. Our friendly staff is here to ensure you have a pleasant dining experience from start to finish.
            </p>
        </div>
        <div className='work-section-bottom'>
            
                <div className='work-section-info'  >
                    <div className='info-boxes-img-container'>
                        <img src="../img/delivery-image.png"alt=''/>
                    </div>
                    <h2>Quality Assurance </h2>
                    <p>We uphold the highest standards of quality in every dish we serve, meticulously sourcing ingredients and maintaining strict hygiene protocols to guarantee a safe and enjoyable dining experience</p>
                </div>
                <div className='work-section-info'  >
                    <div className='info-boxes-img-container'>
                    <img src="../img/delivery-image.png"alt=''/>
                    </div>
                    <h2>Quality Assurance </h2>
                    <p>We uphold the highest standards of quality in every dish we serve, meticulously sourcing ingredients and maintaining strict hygiene protocols to guarantee a safe and enjoyable dining experience</p>
                </div>
                <div className='work-section-info'  >
                    <div className='info-boxes-img-container'>
                        <img src="../img/pick-meals-image.png"alt=''/>
                    </div>
                    <h2>Quality Assurance </h2>
                    <p>We uphold the highest standards of quality in every dish we serve, meticulously sourcing ingredients and maintaining strict hygiene protocols to guarantee a safe and enjoyable dining experience</p>
                </div>
            
        </div>
    </div>
    <Footer/>
    </>
   
  )
}

export default Work
