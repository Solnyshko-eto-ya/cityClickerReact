import React from 'react'
import './_rubleButton.css'

function RubleButton() {
    return (
        <div>
            <img src={require("./png/ruble.png")} alt='' className='ruble_button' />
        </div>
    )
}

export default RubleButton