import React from 'react';
import './projects.css';

const projects = () => {
    return (
        <div className='project-container'>
            <h1 className='projects-headline'>Projects</h1>
            <h2><i>Below are just a few of the projects I have worked on.</i></h2>
            <div className='columns-container project-demo-contain'>
                <div className='col-lg-4 col-sm-12 project-demo'>
                    <img src="https://cdn.shopify.com/s/files/1/0327/3824/6700/files/nickis_diapers_logo_200x.jpg?v=1647868577" alt="nickis diapers" width='200px'/>
                    <a href='https://nickisdiapers.com' target='_blank' rel="noopener noreferrer"><h3>Nickis Diapers Rebuild</h3></a>
                    <h4><i>Frontend Developer</i></h4>
                    <hr />
                    <p>As the Front End Developer of this Project, my duties included customization of 3rd party apps on shopify, custom development of section blocks and schema, optimization of lighthouse scores which included Best Practices, Accessibility, and site speed, and ADA Compliance audits and accessibility upgrades across the entire site.</p>
                </div>
                <div className='col-lg-4 col-sm-12 project-demo'>
                    <img src='https://images.squarespace-cdn.com/content/v1/604372622e7099047ab58b7c/18b59aca-de53-40f2-ab62-e4f6c15a11e1/Jesea+Lee+logo.jpg?format=1500w' alt='jesea lee' width='200px'/>
                    <a href='https://www.jesealee.com/' target='_blank' rel="noopener noreferrer"><h3>Jesea Lee</h3></a>
                    <h4><i>Developer</i></h4>
                    <hr />
                    <p>As the Developer of this Project, my duties included custom development of section blocks via sqaurespace, optimization of lighthouse scores which included Best Practices, Accessibility, and site speed, and ADA Compliance audits and accessibility upgrades across the entire site.</p>
                </div>
                <div className='col-lg-4 col-sm-12 project-demo'>
                    <img src='https://uploads-ssl.webflow.com/6175f043c1194cbc877f7135/62601ef125786b65cabed09c_61760f0728685f5a7f628ac3_The%20Solo%20King1%201-2-p-2600.jpeg' alt='solo king' width='200px' height='80px' />
                    <a href='https://www.thesoloking.com/' target='_blank' rel="noopener noreferrer"><h3>The Solo King</h3></a>
                    <h4><i>Developer</i></h4>
                    <hr />
                    <p>As the Developer of this Project, my duties included custom development of section blocks via Webflow, integration of mailchimp for subscription based retention, and integration of Shopify's playlist and instagram feed for the customers music to be easily accessibile to the user.</p>
                </div>
            </div>
            <div className='skills-cta-container'>
                <h3><i>For more information on a future project, click below.</i></h3>
                    <a className='skills-cta' href='/contact' aria-label='Contact Page'>Contact</a>
                </div>
        </div>
    )
}

export default projects
