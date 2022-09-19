import { useState } from 'react';
import 'antd/dist/antd.css';
import { Drawer } from 'antd';
import './_drawerMenu.css'


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
                    <div className='imgBuild1' ></div>
                </div>
                <div className='lot'>
                    <div className='imgBuild2' ></div>
                </div>
                <div className='lot'>
                    <div className='imgBuild3' ></div>
                </div>
                <div className='lot'>
                    <div className='imgBuild4' ></div>
                </div>
                <div className='lot'>
                    <div className='imgBuild5' ></div>
                </div>
                <div className='lot'>
                    <div className='imgBuild6' ></div>
                </div>
            </Drawer>
        </div>
    )
}

export default DrawerMenu