import React from 'react'
import './_rotatedSun.css'

function RotatedSun() {
    return (
        <div className='container'><img src={require("./png/sun.png")} alt='' className='rotated_sun'></img></div>

    )
}

export default RotatedSun