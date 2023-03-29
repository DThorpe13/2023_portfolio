import React from 'react';
import './skills.css';

const skills = () => {

    const customDevSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Liquid(Shopify)",
        "MySQL",
        "Express.js",
        "Node.js"
    ];
    const contentManagementSkills = [
        "WordPress",
        "Webflow",
        "Shopify Plus",
        "SquareSpace"
    ];
    const analytics = [
        "Google Analytics",
        "Google Tag Manager"
    ];
    const accessibilitySkills = [
        "WAVE",
        "WP Accessiblity"
    ];
    const seoSkills = [
        "YOAST",
        "Google Search Console"
    ];

    return (
        <div className='skills-body'>
            <div>
                <h1><i>My Toolkit</i></h1>
                <hr className='toolkit-break'/>
                <div className='columns-container'>
                    <div className='col-lg-6 col-xs-12 skill-container'>
                        <h2><i>Custom Development</i></h2>
                        <hr className='line-break' />
                        <div>
                            {customDevSkills.map((customDevSkill, index) =>
                                <p key={index} className='skill-map-dev'>{customDevSkill}</p>)}
                        </div>
                    </div>
                    <div className='col-lg-6 col-xs-12'>
                        <div className='columns-container'>
                            <div className='col-lg-6 skill-container'>
                                <h2><i>Content Management</i></h2>
                                <hr className='line-break' />
                                <div>
                                    {contentManagementSkills.map((contentManagementSkill, index) =>
                                        <p key={index} className='skill-map'>{contentManagementSkill}</p>)}
                                </div>
                            </div>
                            <div className='col-lg-6 skill-container'>
                                <h2><i>Analytics</i></h2>
                                <hr className='line-break' />
                                <div>
                                    {analytics.map((analytic, index) =>
                                        <p key={index} className='skill-map'>{analytic}</p>)}
                                </div>
                            </div>
                        </div>
                        <div className='columns-container'>
                            <div className='col-lg-6 skill-container'>
                                <h2><i>Accessibility</i></h2>
                                <hr className='line-break' />
                                <div>
                                    {accessibilitySkills.map((accessibilitySkill, index) =>
                                        <p key={index} className='skill-map'>{accessibilitySkill}</p>)}
                                </div>
                            </div>
                            <div className='col-lg-6 skill-container'>
                                <h2><i>SEO</i></h2>
                                <hr className='line-break' />
                                <div>
                                    {seoSkills.map((seoSkill, index) =>
                                        <p key={index} className='skill-map'>{seoSkill}</p>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default skills