import { useEffect } from 'react';
import Header from './components/Header'
import '../assets/css/about.css';

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
                <h2 className="page__content">Hi, I'm Serking. I'm a software developer focusing on web and mobile applications.</h2>
                <h2 className="page__content">I currently work at <a href='https://padtechcorp.com/' target={"_blank"} rel="noreferrer" className='link__text'>Padtech Industries Corporation.</a></h2>

                {/* <h1 className="page__subtitle">Outside of work</h1>
                <h2 className="page__content">I spend most of my free time reading books, listening to music, playing video games or watching movies, TV series or anime.</h2> */}

                <h1 className="page__subtitle">Contact</h1>
                <h2 className="page__content">Contact me at <a href='mailto:kingdeorayom@gmail.com' target={"_blank"} rel="noreferrer" className="link__text">kingdeorayom@gmail.com</a> or <a href='https://twitter.com/kingdeorayom' target={"_blank"} rel="noreferrer" className="link__text">Twitter</a>.</h2>

            </section>

        </main >
    )
}

export default About
