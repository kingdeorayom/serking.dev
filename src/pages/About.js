import Header from './components/Header'
import '../assets/css/about.css';
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        document.title = 'About | Serking | Software Developer';
    });

    return (
        <main id='wrapper'>

            <section id="header">
                <Header pageTitle="about" />
            </section>

            <section id='about'>
                <h1 className="pageTitle">About</h1>
                <h2 className="pageSubtitle">About me and what I do.</h2>
                <h2 className="pageSubtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis! Nemo autem error nostrum aliquam explicabo. Repellendus, accusamus iure. Minima fuga dignissimos dolorum quae? Delectus dicta sunt facilis quas obcaecati.</h2>
            </section>

        </main >
    )
}

export default About
