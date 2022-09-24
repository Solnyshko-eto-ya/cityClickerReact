import React, { useContext } from 'react'
import './_navbar.css'
import { AppContext } from './App'

function Navbar() {
    const { suns, income } = useContext(AppContext)

    return (
        <div class="topNavBar">
            <div className='scoreBoard'>Солнышки: {suns}</div>
            <div className='counter'>Доход: {income}</div>
        </div >
    )
}

export default Navbar