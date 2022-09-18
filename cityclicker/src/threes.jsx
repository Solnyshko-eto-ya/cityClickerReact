import React from 'react'
import './_threes.css'


function Threes() {
    return (
        <div className='threes-container'>
            <img src={require("./png/three.png")} className="three1" alt=''></img>
            <img src={require("./png/three.png")} className="three2" alt=''></img>
            <img src={require("./png/three.png")} className="three3" alt=''></img>
            <img src={require("./png/three.png")} className="three4" alt=''></img>
            <img src={require("./png/three.png")} className="three5" alt=''></img>
        </div>


    )
}

export default Threes