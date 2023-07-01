import { useEffect } from 'react';
import Header from './components/Header'
import '../assets/css/about.css';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

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
import bob_ong_56 from '../assets/images/about/bob_ong_56.jpg'
import rubber_soul from '../assets/images/about/rubber_soul.jpg'
import witcher from '../assets/images/about/witcher.jpg'
import conan from '../assets/images/about/conan.jpg'
const About = () => {

    Fancybox.bind("[data-fancybox]", {
        infinite: true,
    });


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
                <h2 className="page__content">Hi, I'm Serking. I'm a software developer focusing on web and mobile applications.</h2>
                <h2 className="page__content">I earned my bachelor's degree in Information Technology at the University of Perpetual Help System Laguna with an academic honor of distinction: <em>Magna Cum Laude</em>.</h2>
                <h2 className="page__content">I currently work at <a href='https://padtechcorp.com/' target={"_blank"} rel="noreferrer" className='link__text'>Padtech Industries Corporation.</a></h2>

                <h1 className="page__subtitle">Outside of work</h1>
                <h2 className="page__content">I spend most of my free time reading books, listening to music, playing video games or watching movies, TV series or anime.</h2>

                <section className="gallery">
                    <img src={bob_ong_56} className='img-fluid about__gallery__image' alt="About" />
                    <img src={rubber_soul} className='img-fluid about__gallery__image' alt="About" />
                    <img src={witcher} className='img-fluid about__gallery__image' alt="About" />
                    <img src={conan} className='img-fluid about__gallery__image image__disappear' alt="About" />
                </section>

                <h2 className="page__content">If time permits, I also hang out with my friends and family.</h2>

                <section className="gallery">

                    <a href={image_1} data-fancybox="gallery"><img src={image_1} className='img-fluid about__gallery__image' alt="About" /></a>
                    <a href={image_2} data-fancybox="gallery"><img src={image_2} className='img-fluid about__gallery__image' alt="About" /></a>
                    <a href={image_3} data-fancybox="gallery"><img src={image_3} className='img-fluid about__gallery__image' alt="About" /></a>
                    <a href={image_4} data-fancybox="gallery"><img src={image_4} className='img-fluid about__gallery__image' alt="About" /></a>
                    <a href={image_5} data-fancybox="gallery"><img src={image_5} className='img-fluid about__gallery__image' alt="About" /></a>
                    <a href={image_6} data-fancybox="gallery"><img src={image_6} className='img-fluid about__gallery__image' alt="About" /></a>
                    <a href={image_7} data-fancybox="gallery"><img src={image_7} className='img-fluid about__gallery__image' alt="About" /></a>
                    <a href={image_8} data-fancybox="gallery"><img src={image_8} className='img-fluid about__gallery__image' alt="About" /></a>
                    <a href={image_9} data-fancybox="gallery"><img src={image_9} className='img-fluid about__gallery__image' alt="About" /></a>
                    <a href={image_10} data-fancybox="gallery"><img src={image_10} className='img-fluid about__gallery__image' alt="About" /></a>
                    <a href={image_11} data-fancybox="gallery"><img src={image_11} className='img-fluid about__gallery__image' alt="About" /></a>
                    <a href={image_12} data-fancybox="gallery"><img src={image_12} className='img-fluid about__gallery__image' alt="About" /></a>

                </section>

                <h1 className="page__subtitle">Contact</h1>
                <h2 className="page__content">Contact me at <a href='mailto:kingdeorayom@gmail.com' target={"_blank"} rel="noreferrer" className="link__text">kingdeorayom@gmail.com</a> or <a href='https://twitter.com/kingdeorayom' target={"_blank"} rel="noreferrer" className="link__text">Twitter</a>.</h2>

            </section>

        </main >
    )
}

export default About
