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
                <h1 className="page__title">About</h1>
                <h2 className="page__content">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <h2 className="page__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero magni, placeat unde ab reiciendis dolorem quibusdam dolor aliquam culpa: <em>lorem ipsum</em>.</h2>
                <h2 className="page__content">Lorem ipsum dolor sit amet consectetur.</h2>

                <h1 className="page__subtitle">Outside of work</h1>
                <h2 className="page__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum quis dolorem eum veniam sequi quod culpa ad optio suscipit explicabo, nulla voluptas ullam voluptates numquam totam inventore. Iusto, atque?.</h2>

                <section className="gallery">
                    <img src={image_1} className='img-fluid about__gallery__image' alt="About" />
                    <img src={image_2} className='img-fluid about__gallery__image' alt="About" />
                    <img src={image_3} className='img-fluid about__gallery__image' alt="About" />
                    <img src={image_4} className='img-fluid about__gallery__image' alt="About" />
                </section>

                <h2 className="page__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum quis dolorem eum veniam sequi quod culpa ad optio suscipit explicabo, nulla voluptas ullam voluptates numquam totam inventore. Iusto, atque?.</h2>

                <section className="gallery">

                    <img src={image_1} className='img-fluid about__gallery__image' alt="About" />
                    <img src={image_2} className='img-fluid about__gallery__image' alt="About" />
                    <img src={image_3} className='img-fluid about__gallery__image' alt="About" />
                    <img src={image_4} className='img-fluid about__gallery__image' alt="About" />
                    <img src={image_5} className='img-fluid about__gallery__image' alt="About" />
                    <img src={image_6} className='img-fluid about__gallery__image' alt="About" />
                    <img src={image_7} className='img-fluid about__gallery__image' alt="About" />
                    <img src={image_8} className='img-fluid about__gallery__image' alt="About" />
                    <img src={image_9} className='img-fluid about__gallery__image' alt="About" />
                    <img src={image_10} className='img-fluid about__gallery__image' alt="About" />
                    <img src={image_11} className='img-fluid about__gallery__image' alt="About" />
                    <img src={image_12} className='img-fluid about__gallery__image' alt="About" />

                </section>

                <h1 className="page__subtitle">Outside of work</h1>
                <h2 className="page__content">Contact me at kingdeorayom@gmail.com or Twitter.</h2>

            </section>

        </main >
    )
}

export default About
