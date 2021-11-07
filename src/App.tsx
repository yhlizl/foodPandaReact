import React from 'react';
import styles from './App.module.css';
import { Header, Footer,Detail } from "./components/index"
import {HomePage} from './pages/index'
// import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className={styles.App}>
    <Header />

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path=":test" element={<HomePage/>}/>
    <Route path="/signin" element={<div>sign-in</div>}/>
    <Route path="/signin/:test" element={<Detail/>}/>

    <Route element={<div>no other things</div>}/>
    </Routes>
    </BrowserRouter>
    <Footer />
  </div>
  );
}

export default App;
