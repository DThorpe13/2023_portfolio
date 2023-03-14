import React from 'react';
import './about.css';
import Selfie from '../../images/self.jpg'

const about = () => {
  return (
    <div>
        <p className='about-intro'>
          -I am a web developer who specializes in frontend development and Content Management Systems.
        </p>
        <div className='columns-container about-container'>
          <div className='col-lg-4 col-xs-12'>
            <img className='self-image' src={Selfie} alt="self"/>
          </div>
          <div className='col-lg-8 col-xs-12 brand-statement'>
            <p>- As a Frontend Developer, I have always taken a great pride in the process of creating, designing, updating, and maintaining web applications, while ensuring that what I am working becomes a mobile responsive, accessable website.
            </p>
          </div>
        </div>
        <hr style={{width: "90%"}}/>
        <div className='columns-container'>
          <div className='col-lg-4 col-xs 12'>

          </div>
          <div className='col-lg-4 col-xs 12'>
            
          </div>
          <div className='col-lg-4 col-xs 12'>
            
          </div>
        </div>
    </div>
  )
}

export default about