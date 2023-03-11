import Image from 'next/image'
import React from 'react'
import heroImage from '../public/serking-cartoon.png'
import styles from '../styles/Hero.module.css'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <header>
            <Image
                src={heroImage}
                alt='Pikachu representing Serking de Orayom'
                width={70}
                height={70}
                draggable={false}
                className={styles.image}
            />
            <h1 className={styles.name}>Serking de Orayom</h1>
            <h2 className={styles.description}>A software developer focusing on web and mobile applications</h2>
            <Link href='/about'>
                <h6 className={styles.button}>Read more <FaArrowRight /></h6>
            </Link>
        </header>
    )
}

export default Hero