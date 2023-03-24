import React from 'react';
import './home.css';
import SelfImg from '../../images/self-tall.jpg';

const HomePage = () => {
    return (
        <div className='home-background'>
            <div className='home-background-two'>
                <div className='columns-container'>
                    <div className='col-lg-6 col-xs-12 home-contain-left'>
                        <h1>Derek <br />Thorpe</h1>
                        <i><h2>Frontend Developer | Website Creator</h2></i>
                        <hr/>
                        <p><a className='github-home' href='https://github.com/DThorpe13' target='_blank' rel="noopener noreferrer"> View GitHub</a></p>
                    </div>
                    <div className='col-lg-6 col-xs-12 home-contain-right'>
                        <div className='home-img-background'></div>
                        <img src={SelfImg} className='home-self-img' alt='self'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage