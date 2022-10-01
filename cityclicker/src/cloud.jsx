import React from 'react'
import './_cloud.css'
import cloud from './png/cloud.png'

function Cloud() {
    return (
        <div className='cloudMuvingContainer'>
            <div>
                <img src={cloud} alt='' className='pictureOfCloud1'></img>
            </div>
            <div>
                <img src={cloud} alt='' className='pictureOfCloud2'></img>
            </div>
            <div>
                <img src={cloud} alt='' className='pictureOfCloud3'></img>
            </div>
            <div>
                <img src={cloud} alt='' className='pictureOfCloud4'></img>
            </div>
        </div>

    )
}

export default Cloud