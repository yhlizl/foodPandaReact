import React from 'react';
import styles from './App.module.css';
// import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { Header, Footer,SideMenu } from "./components/index"
import { Row, Col } from "antd"


function App() {
  return (
    <div className={styles.App}>
      <Header />
      {/* {content} */}
      <div className={styles.content}>
      <SideMenu/>

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
      <Footer />
    </div>
  );
}

export default App;
