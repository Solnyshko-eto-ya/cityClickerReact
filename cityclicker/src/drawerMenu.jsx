import { useState, useContext } from 'react';
import 'antd/dist/antd.css';
import { Drawer } from 'antd';
import './_drawerMenu.css'
import { AppContext } from './App'



function House({ house }) {

    const { buyHouse, suns } = useContext(AppContext)
    return (
        <div>
            <div className='lot'>
                <p className='lotName'>{house.name}</p>
                <div className='lotSubscription'>
                    <p className='price'>Цена: {house.price} C</p>
                    <p className='profitability'>Доходность: {house.income}C/сек</p>

                </div>
                <div className='pictureOfHouse' >
                    <img src={house.image} alt="" />
                </div>

            </div>
            <div className='lotButtons'>
                <button className='buyLot' disabled={suns < house.price} onClick={() => buyHouse(house.name)}>Купить!</button>
            </div>
        </div>

    )
}

function DrawerMenu() {
    const { houses } = useContext(AppContext)

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <button className='buyHouse' type="primary" onClick={showDrawer}>Купить дома</button>
            <Drawer
                placement={'left'}
                closable={false}
                onClose={onClose}
                open={open}
                size={'large'}
            >
                {houses.map(house => <House house={house} />)}
            </Drawer>
        </div>
    )
}

export default DrawerMenu