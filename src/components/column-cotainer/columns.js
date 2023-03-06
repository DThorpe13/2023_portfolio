import React from 'react';
import './columns.css'

const columns = () => {
    return (
        <div className='container'>
            <div className='columns-container'>
                <div className='col-lg-8 col-xs-12 color-lg-white color-xs-grey'>
                    <h2>Hello</h2>
                        
                </div>
                <div className='col-lg-4 col-xs-12 color-lg-smoke color-xs-grey'>
                    <h2>Hello</h2>
                </div>
            </div>
            <div className='columns-container'>
                <div className='col-lg-4 col-xs-12 color-lg-smoke color-xs-grey'>
                    <h2>Hello</h2>
                </div>
                <div className='col-lg-8 col-xs-12 color-lg-white color-xs-grey'>
                    <h2>Hello</h2>
                </div>
            </div>
        </div>
    )
}

export default columns
