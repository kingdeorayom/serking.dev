import { useEffect } from 'react';
import Header from './components/Header'
import '../assets/css/about.css';
import image_1 from '../assets/images/about/1.jpg'
import image_2 from '../assets/images/about/2.jpg'
import image_3 from '../assets/images/about/3.jpg'
import image_4 from '../assets/images/about/4.jpg'
import image_5 from '../assets/images/about/5.jpg'
import image_6 from '../assets/images/about/6.jpg'
import image_7 from '../assets/images/about/7.jpg'
import image_8 from '../assets/images/about/8.jpg'
import image_9 from '../assets/images/about/9.jpg'
import image_10 from '../assets/images/about/10.jpg'
import image_11 from '../assets/images/about/11.jpg'
import image_12 from '../assets/images/about/12.jpg'

const About = () => {

    useEffect(() => {
        document.title = 'About | Serking';
    });

    return (
        <main id='wrapper'>

            <section id="header">
                <Header pageTitle="about" />
            </section>

            <section id='about'>
                <h1 className="pageTitle">About</h1>
                <h2 className="pageContent">Hello, I'm Serking. I'm a software developer.</h2>
                <h2 className="pageContent">I earned my bachelor's degree in Information Technology at the University of Perpetual Help System Laguna with an academic honor of distinction: <em>Magna Cum Laude</em>.</h2>
                <h2 className="pageContent">I am currently looking for a job.</h2>

                <h1 className="pageSubtitle">Outside of work</h1>
                <h2 className="pageContent">I spend most of my free time hanging out &#40;if time permits&#41; with my friends and family, reading books, playing video games or watching movies and TV series.</h2>

                <section className="gallery">
                    <img src={image_1} className='img-fluid galleryImage' alt="About" />
                    <img src={image_2} className='img-fluid galleryImage' alt="About" />
                    <img src={image_3} className='img-fluid galleryImage' alt="About" />
                    <img src={image_4} className='img-fluid galleryImage' alt="About" />
                </section>

                <h2 className="pageContent">I spend most of my free time hanging out &#40;if time permits&#41; with my friends and family, reading books, playing video games or watching movies and TV series.</h2>

                <section className="gallery">

                    <img src={image_1} className='img-fluid galleryImage' alt="About" />
                    <img src={image_2} className='img-fluid galleryImage' alt="About" />
                    <img src={image_3} className='img-fluid galleryImage' alt="About" />
                    <img src={image_4} className='img-fluid galleryImage' alt="About" />
                    <img src={image_5} className='img-fluid galleryImage' alt="About" />
                    <img src={image_6} className='img-fluid galleryImage' alt="About" />
                    <img src={image_7} className='img-fluid galleryImage' alt="About" />
                    <img src={image_8} className='img-fluid galleryImage' alt="About" />
                    <img src={image_9} className='img-fluid galleryImage' alt="About" />
                    <img src={image_10} className='img-fluid galleryImage' alt="About" />
                    <img src={image_11} className='img-fluid galleryImage' alt="About" />
                    <img src={image_12} className='img-fluid galleryImage' alt="About" />

                </section>

                <h1 className="pageSubtitle">Outside of work</h1>
                <h2 className="pageContent">Contact me at kingdeorayom@gmail.com or Twitter.</h2>

            </section>

        </main >
    )
}

export default About
