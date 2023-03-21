import React from 'react';
import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LetterD from '../../images/letter-D.jpeg';

const footer = () => {
    const user = {
        faceBook: 'https://www.facebook.com/people/Derek-Thorpe/pfbid05fR3pxwu164TyyC7C5JxBXpEUY9izi6tYQAFFfQpYx53RQfwvJJE12qnhQCdtxvql/',
        instaGram: 'https://www.instagram.com/d_thorpe13/',
        linkedIn: 'https://www.linkedin.com/in/derek-thorpe-1b6b761b9/',
        gitHub: 'https://github.com/DThorpe13'
    }
  return (
    <div>
        <hr />
        <div className='columns-container'>
            <div className='col-lg-6 col-xs-12'>
            <div className='columns-container footer-left'>
                    <div className='col-lg-6 col-xs-12'>
                        <img src={LetterD} alt='footer-initial' className='footer-initial'/>
                    </div>
                    <div className='col-lg-6 col-xs-12'>
                        <p className='footer-head'>Contact</p>
                        <p className='footer-para'><span><MailIcon className='mail-icon' fontSize='medium' /></span> Derekthorpe13@gmail.com<hr /><span><CallIcon className='cell-icon' fontSize='medium' /></span> 440-476-8095</p>
                    </div>
                </div> 
                
            </div>
            <div className='col-lg-6 col-xs-12'>
                <div className='columns-container footer-right'>
                    <div className='col-lg-6 col-xs-12'>
                        <p className='footer-head'>Social Media</p>
                        <p className='footer-para'>All links to my social media can be found by clicking on the icons below.</p>
                    </div>
                    <div className='col-lg-6 col-xs-12'>
                        <p className='footer-head'>Location</p>
                        <p className='footer-para'>Cleveland, OH, USA</p>
                    </div>
                </div>  
            </div>
        </div>
        <div className='social-links-container'>
            <a href={user.faceBook} target='_blank' rel="noopener noreferrer"><FacebookIcon className='social-links' fontSize='large'/></a>
            <a href={user.instaGram} target='_blank' rel="noopener noreferrer"><InstagramIcon className='social-links' fontSize='large'/></a>
            <a href={user.linkedIn} target='_blank' rel="noopener noreferrer"><LinkedInIcon className='social-links' fontSize='large'/></a>
            <a href={user.gitHub} target='_blank' rel="noopener noreferrer"><GitHubIcon className='social-links' fontSize='large'/></a>
          </div>
    </div>
  )
}

export default footer