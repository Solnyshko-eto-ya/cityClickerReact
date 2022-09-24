import React from 'react'
import './_cloud.css'

function Cloud() {
    return (
        <div className='cloudMuvingContainer'>
            <img src={require("./png/cloud.png")} alt='' className='pictureOfCloud1'></img>
            {/* <img src={require("./png/cloud.png")} alt='' className='pictureOfCloud2'></img>
<img src={require("./png/cloud.png")} alt='' className='pictureOfCloud3'></img>
<img src={require("./png/cloud.png")} alt='' className='pictureOfCloud4'></img>
<img src={require("./png/cloud.png")} alt='' className='pictureOfCloud5'></img> */}
        </div>

    )
}

export default Cloud