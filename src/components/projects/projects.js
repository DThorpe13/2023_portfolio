import React from 'react';
import './projects.css';

const projects = () => {
    return (
        <div className='project-container'>
            <h1 className='projects-headline'>Projects</h1>
            <div className='columns-container background-transparent'>
                <div className='col-lg-6 col-xs-12 background-white'>
                    <h2>Project1</h2>
                </div>
                <div className='col-lg-6 col-xs-12 background-white'>
                    <h2>Project2</h2>
                </div>
            </div>
            <div className='columns-container background-transparent'>
                <div className='col-lg-6 col-xs-12 background-white'>
                    <h2>Project3</h2>
                </div>
                <div className='col-lg-6 col-xs-12 background-white'>
                    <h2>Project4</h2>
                </div>
            </div>
        </div>
    )
}

export default projects
