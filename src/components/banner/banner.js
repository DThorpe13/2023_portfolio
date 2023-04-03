import React from 'react';
import './banner.css'
import Resume from '../../Derek_Thorpe_Resume.pdf';


const banner = () => {
    return (
        <div className='banner'>
            <a href={Resume} download="Derek_Thorpe_Resume" target='_blank' rel="noreferrer">
                <p>Click here to download resume</p>
            </a>
        </div>
    )
}

export default banner
