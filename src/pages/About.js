import Footer from './components/Footer'
import BackToHome from './components/BackToHome'
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main id='about'>

            <BackToHome />

            <section id="intro">
                <h1 className="pageTitle">About</h1>
                <h2 className="pageSubtitle">I'm Serking, a software developer.</h2>
                <div className="imageHolder text-center">
                    <img src="../images/self/serking-grad-pic.jpg" id='gradPic' className='img-fluid' alt="Serking Graduation Formal" />
                </div>

                <h2 className="pageSubtitle">I graduated from the <a href='https://uphsl.edu.ph' target={"_blank"} rel="noreferrer" className="linkText">University of Perpetual Help System Laguna</a> with a bachelor's degree in Information Technology and an academic honor of distinction: <strong><em>Magna Cum Laude</em></strong>.</h2>
            </section>

            <Footer />

        </main>)
}

export default About
