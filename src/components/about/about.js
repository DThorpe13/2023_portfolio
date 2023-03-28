import React from 'react';
import './about.css';
import Selfie from '../../images/self.jpg';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

const about = () => {
  return (
    <div>
      <p className='about-intro'>
        -I am a web developer who specializes in custom frontend development and Content Management Systems.
      </p>
      <div className='columns-container about-container'>
        <div className='col-lg-4 col-xs-12'>
          <img className='self-image' src={Selfie} alt="self" loading='lazy' />
        </div>
        <div className='col-lg-8 col-xs-12 brand-statement'>
          <p>- As a Frontend Developer, I have always taken a great pride in the process of creating, designing, updating, and maintaining web applications, while ensuring that what I am working becomes a mobile responsive, accessable website.
          </p>
        </div>
      </div>
      <hr style={{ width: "90%" }} />
      <div className='columns-container seo-contain'>
        <div className='col-lg-4 col-xs-12'>
          <PhoneAndroidIcon fontSize='large' className='svg-icons' />
          <p className='icon-header'>Mobile Responsive</p>
          <p className='icon-body'>This is where the body text will go.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus tempor lorem laoreet condimentum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus tempor lorem laoreet condimentum.
          </p>
        </div>
        <div className='col-lg-4 col-xs-12'>
          <AutoGraphIcon fontSize='large' className='svg-icons' />
          <p className='icon-header'>SEO</p>
          <p className='icon-body'>This is where the body text will go.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus tempor lorem laoreet condimentum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus tempor lorem laoreet condimentum.
          </p>
        </div>
        <div className='col-lg-4 col-xs-12'>
          <AccessibilityNewIcon fontSize='large' className='svg-icons' />
          <p className='icon-header'>Accessibility</p>
          <p className='icon-body'>This is where the body text will go.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus tempor lorem laoreet condimentum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus tempor lorem laoreet condimentum.
          </p>
        </div>
      </div>
      <BubbleChartIcon className='bubble-icon'/>
    </div>
  )
}

export default about