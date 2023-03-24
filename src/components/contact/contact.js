import React from 'react';
import './contact.css';

const contact = () => {
  return (
    <div className='contact-background'>
        <div className='contact-lead-container'>
            <div className='columns-container contact-sec-container'>
                <div className='col-lg-6 col-xs-12 contact-col-left'>
                    <p className='contact-chat-para'>Lets Chat.<br />Tell me about your project.</p>
                    <p className='contact-para-two'>Lets create something together.</p>
                    <p className='contact-mailer'><span className='contact-email'>Email me @ </span><br /> <a href='mailto: derekthorpe13@gmail.com'>DerekThorpe13@gmail.com</a></p>
                </div>
                <div className='col-lg-6 col-xs-12 contact-col-right'>
                    <div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default contact