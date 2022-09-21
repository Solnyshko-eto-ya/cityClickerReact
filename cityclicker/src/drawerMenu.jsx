import { useState } from 'react';
import 'antd/dist/antd.css';
import { Drawer } from 'antd';
import './_drawerMenu.css'
import build1 from "./png/build1.png";
import build2 from "./png/build2.png";
import build3 from "./png/build3.png";
import build4 from "./png/build4.png";
import build5 from "./png/build5.png";
import build6 from "./png/build6.png";


function DrawerMenu() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const closeDrawer = () => {
        setOpen(false);
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
                <div className='lot'>
                    <p className='lotName'>Общага</p>
                    <div className='lotSubscription'>
                        <p className='price'>Цена: 10 C</p>
                        <p className='profitability'>Доходность: 10C/сек</p>
                    </div>
                    <div className='pictureOfHouse' >
                        <img src={build1} alt="" />
                    </div>

                </div>
                <div className='lotButtons'>
                    <div className='buyLot'><p className='lotButtonsText'>Купить!</p></div>
                    <div className='upgradeLot'><p className='lotButtonsText'>Улучшить!</p></div>
                </div>
                <div className='lot'>
                    <p className='lotName'>Многоквартирный дом</p>
                    <div className='lotSubscription'>
                        <p className='price'>Цена: 100 C</p>
                        <p className='profitability'>Доходность: 100 C/сек</p>
                    </div>
                    <div className='pictureOfHouse' >
                        <img src={build2} alt="" />
                    </div>

                </div>
                <div className='lotButtons'>
                    <div className='buyLot'><p className='lotButtonsText'>Купить!</p></div>
                    <div className='upgradeLot'><p className='lotButtonsText'>Улучшить!</p></div>
                </div>
                <div className='lot'>
                    <p className='lotName'>Частный дом</p>
                    <div className='lotSubscription'>
                        <p className='price'>Цена: 1000 C</p>
                        <p className='profitability'>Доходность: 1000 С/сек</p>
                    </div>
                    <div className='pictureOfHouse' >
                        <img src={build3} alt="" />
                    </div>
                </div>
                <div className='lotButtons'>
                    <div className='buyLot'><p className='lotButtonsText'>Купить!</p></div>
                    <div className='upgradeLot'><p className='lotButtonsText'>Улучшить!</p></div>
                </div>
                <div className='lot'>
                    <p className='lotName'>Зелёный дом</p>
                    <div className='lotSubscription'>
                        <p className='price'>Цена: 10к С</p>
                        <p className='profitability'>Доходность: 10к С/сек</p>
                    </div>
                    <div className='pictureOfHouse' >
                        <img src={build4} alt="" />
                    </div>
                </div>
                <div className='lotButtons'>
                    <div className='buyLot'><p className='lotButtonsText'>Купить!</p></div>
                    <div className='upgradeLot'><p className='lotButtonsText'>Улучшить!</p></div>
                </div>
                <div className='lot'>
                    <p className='lotName'>Особоняк</p>
                    <div className='lotSubscription'>
                        <p className='price'>Цена: 100к С</p>
                        <p className='profitability'>Доходность: 100к С/сек</p>
                    </div>
                    <div className='pictureOfHouse' >
                        <img src={build5} alt="" />
                    </div>
                </div>
                <div className='lotButtons'>
                    <div className='buyLot'><p className='lotButtonsText'>Купить!</p></div>
                    <div className='upgradeLot'><p className='lotButtonsText'>Улучшить!</p></div>
                </div>
                <div className='lot'>
                    <p className='lotName'>Дача Путина</p>
                    <div className='lotSubscription'>
                        <p className='price'>Цена: 100м С</p>
                        <p className='profitability'>Доходность: 100м С/сек</p>
                    </div>
                    <div className='pictureOfHouse' >
                        <img src={build6} alt="" />
                    </div>
                </div>
                <div className='lotButtons'>
                    <div className='buyLot'><p className='lotButtonsText'>Купить!</p></div>
                    <div className='upgradeLot'><p className='lotButtonsText'>Улучшить!</p></div>
                </div>
            </Drawer>
        </div>
    )
}

export default DrawerMenu