import React from 'react'
import { data } from './mockup'
import styles from './SideMenu.module.css'
import { Menu } from "antd"
import { GifOutlined } from '@ant-design/icons'
const SideMenu = () => {
    const list = data.data.items
    let diff: { [key: string]: string } = {}
    let meals: { [key: string]: string[] } = {}

    return (
        <div className={styles.sidebar}>
            <Menu mode={'vertical'}>
                {list.map((item, ind) => {
                    if (diff[item.characteristics.cuisines[0].name] !== undefined) {
                        return null
                    }
                    diff[item.characteristics.cuisines[0].name] = item.characteristics.cuisines[0].name
                    meals[item.characteristics.cuisines[0].name]=[]
                    meals[item.characteristics.cuisines[0].name].push(item.characteristics.cuisines[0].name)
                    
                        return (<Menu.SubMenu key={ind}
                            title={<span><GifOutlined />  {item.characteristics.cuisines[0].name}</span>}

                        >
                        </Menu.SubMenu>)
                    
                })}
                
            </Menu>
        </div>
    )
}

export { SideMenu }
