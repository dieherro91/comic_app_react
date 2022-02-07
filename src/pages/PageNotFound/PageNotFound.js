import React from 'react';
import './PageNotFound.css'
import rggwwwrr from '../../assets/images/cartoon-1299393.svg'

function PageNotFound() {

    return (
        <>
            <div className='pagenot'>
                <h1>Page Not Found 404</h1>
                <img id="notFnd"src={rggwwwrr} alt="dinos"/>
            </div>
        </>
    )
};

export default PageNotFound;