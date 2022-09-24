import React, { useContext } from 'react'
import './_rubleButton.css'
import { AppContext } from './App'

function RubleButton() {
    const { setSuns } = useContext(AppContext)
    const { income } = useContext(AppContext)

    return (
        <div>
            <img src={require("./png/ruble.png")} alt='' className='ruble_button' onClick={() => setSuns(prev => prev + income)} />

        </div>
    )
}

export default RubleButton