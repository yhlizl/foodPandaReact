import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/pandalogo.png';

import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons"


const Header :React.FC= () => {
    return (
        <>
           
      <div className={styles['App-header']}>
        {/* {top-header} */}
        <div className={styles['top-header']}>
          <div className={styles.inner}>
            <Typography.Text>
              選你愛吃der
            </Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15, display: 'inline' }}
              overlay={
                <Menu>
                  <Menu.Item>
                    中文
                  </Menu.Item>
                  <Menu.Item>
                    English
                  </Menu.Item>
                </Menu>
              }
              // icon={<GlobalOutlined/>}
              icon={<GlobalOutlined />}

            >語言
            </Dropdown.Button>
            <Button.Group className={styles['button-group']}>
              <Button>
                註冊
              </Button>
              <Button>
                登入
              </Button>
            </Button.Group>
          </div>


        </div>
        <Layout.Header className={styles['main-header']}>
          <img src={logo} alt="" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>
            Food Panda Order
          </Typography.Title>
          <Input.Search placeholder={"請輸入餐點"} className={styles['search-input']} />
        </Layout.Header>
        <Menu mode={"horizontal"} className={styles.menu}>
              <Menu.Item key={1}>
                首頁
              </Menu.Item>
              <Menu.Item key={2}>
                今日訂單
              </Menu.Item>
              <Menu.Item key={3}>
                過去訂單
              </Menu.Item>
        </Menu>
      </div>

        </>
    )
}

export {Header}
