import React from 'react';
import './contact.css';

const contact = () => {
  return (
    <div className='contact-background'>
        <div className='contact-lead-container'>
            <div className='columns-container contact-sec-container'>
                <div className='col-lg-6 col-xs-12 contact-col-left'>
                    <p className='contact-chat-para'>Lets Chat.<br />Tell me about your project.</p>
                    <p>Lets create something together.</p>
                    <p className='contact-mailer'>Email me at <br /> Derekthorpe13@gmail.com</p>
                </div>
                <div className='col-lg-6 col-xs-12 contact-col-right'>
                    <div>
                        <p>Send a message.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default contact