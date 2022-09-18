import React from 'react'
import './_navbar.css'

function Navbar() {
    return (
        <div class="topNavBar">
            <button className='buyHouse'>Купить дома</button>
            <div className='scoreBoard'>Солнышки: </div>
            <div className='counter'>Доход: </div>
        </div>
    )
}

export default Navbar