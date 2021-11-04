import React from 'react';
import { Layout, Typography } from "antd"
import styles from "./Footer.module.css"
const Footer = () => {
    return (
        <>
        <Layout.Footer>
        <Typography.Title level={3} style={{textAlign:'center'}} className={styles.footer} >
          版權所有 ＠ yhlizl
        </Typography.Title>
      </Layout.Footer> 
        </>
    )
}

export {Footer}
