import React from 'react'
import './_buildHouses.css'
import { AppContext } from './App'
import { useContext } from 'react'
import classNames from 'classnames'

function House({ image, amount }) {
    return (
        <div className={classNames('house', { visible: amount })}>
            <img src={image} alt="" />
        </div>
    )
}

function BuildHouses() {
    const { houses } = useContext(AppContext)
    return (
        <div className='houseContainer'>
            {houses.map(house => <House image={house.image} amount={house.amount} />)}
        </div>
    )
}

export default BuildHouses