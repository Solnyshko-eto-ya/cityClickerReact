import React from 'react'
import './_grassRoadSky.css'
import background from './png/mountains.jpg'

function GrassAndRoad() {
    return (
        <div>grassAndRoad
            <div className='grassOne'></div>
            <div className='grassTwo'></div>
            <div className='road'></div>
            <div className='grassThree'></div>
            <div className='backgroundLandscape'><img src={background} alt="" /></div>
            <div className='stripe'></div>
            <div className='stripe2'></div>
            <div className='stripe3'></div>
            <div className='stripe4'></div>
        </div>
    )
}

export default GrassAndRoad