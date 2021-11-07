import React from 'react'
import styles from './HomePage.module.css'
import { SideMenu,Carousel } from "../../components/index"
import { Row, Col } from "antd"


const HomePage :React.FC = () => {
    return (

        <div className={styles.content}>
        <SideMenu/>
        <Carousel/>
  
          <Row style={{ marginTop: '20px' }}>
            <Col span={6}>
              <div></div>
            </Col>
            <Col span={18}>
              <div>
              </div>
            </Col>
          </Row>
        </div>

    )
}

export {HomePage}
