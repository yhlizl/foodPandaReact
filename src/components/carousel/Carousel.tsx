import React from 'react'
import styles from './Carousel.module.css'
import {Image,Carousel as AnCarousel} from 'antd'
import p1 from '../../assets/images/asteroid_01.png'
 
const Carousel = () => {
    return (
        <div className={styles.Carousel}>
            <AnCarousel autoplay>
                <Image src={p1}/>
            </AnCarousel>
        </div>  
    )
}

export {Carousel}
