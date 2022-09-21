import React from 'react'
import './_cloud.css'

function Cloud() {
    return (
        <div className='cloudPictureContainer'><img src={require("./png/cloud.png")} alt='' className='pictureOfCloud'></img></div>
    )
}

export default Cloud