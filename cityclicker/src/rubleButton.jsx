import React from 'react'
import './_rubleButton.css'

function RubleButton() {
    return (
        <div>
            <button><img src={require("./png/ruble.png")} alt='' className='ruble_button' /></button>
        </div>
    )
}

export default RubleButton