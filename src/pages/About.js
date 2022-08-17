import Footer from './components/Footer'
import BackToHome from './components/BackToHome'
import gradPic from '../assets/images/self/serking-grad-pic.jpg'
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
                    <img src={gradPic} id='gradPic' className='img-fluid' alt="Serking Graduation Formal" />
                </div>

                <h2 className="pageSubtitle">It is sometimes hard for me to identify and recognize how the things I do affect the person I am today and how I respond to everything that's happening around me. That being the case, I am not very good at introducing myself so please bear with me here.</h2>

                <h2 className="pageSubtitle">I guess I'll start with my education and what works I do.</h2>

                <h1 className="aboutAltTitle">Works and Education</h1>

                <h2 className="pageSubtitle">I graduated from the <a href='https://uphsl.edu.ph' target={"_blank"} rel="noreferrer" className="linkText">University of Perpetual Help System Laguna</a> with a bachelor's degree in Information Technology and an academic honor of distinction: <strong><em>Magna Cum Laude</em></strong>.</h2>

                <section className='my-5'>
                    <div className="gallery mb-2">
                        <a href={require("../assets/images/photo-album/family/4.jpg")} data-fancybox="gallery"><img src={require("../assets/images/photo-album/family/4.jpg")} className='img-fluid galleryImageAbout' alt="" /></a>
                        <a href={require("../assets/images/photo-album/family/4.jpg")} data-fancybox="gallery"><img src={require("../assets/images/photo-album/family/4.jpg")} className='img-fluid galleryImageAbout' alt="" /></a>
                        <a href={require("../assets/images/photo-album/family/4.jpg")} data-fancybox="gallery"><img src={require("../assets/images/photo-album/family/4.jpg")} className='img-fluid galleryImageAbout' alt="" /></a>
                    </div>
                </section>

                <h2 className="pageSubtitle">As stated above, I am a software developer&mdash;a web developer, to be precise &#40;but I also developed a couple of desktop applications for myself&#41;. I mostly do front-end web development and currently, I'm upscaling my skills by learning back-end. You may view my works by going to the Apps section of my page.</h2>

                <h2 className="pageSubtitle">You may view or download my resume by clicking here.</h2>

                <h2 className="pageSubtitle">That's about my works and education. The next section is about what I mostly do outside of work.</h2>

                <h1 className="aboutAltTitle">Outside of Work</h1>

                <h2 className="pageSubtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta ex consequuntur odit, reprehenderit aliquid sed quidem impedit dolorum maxime in earum provident eius officia mollitia delectus quaerat unde accusamus!</h2>

                <section className='my-5'>
                    <div className="gallery mb-2">
                        <a href={require("../assets/images/photo-album/family/4.jpg")} data-fancybox="gallery"><img src={require("../assets/images/photo-album/family/4.jpg")} className='img-fluid galleryImageAbout' alt="" /></a>
                        <a href={require("../assets/images/photo-album/family/4.jpg")} data-fancybox="gallery"><img src={require("../assets/images/photo-album/family/4.jpg")} className='img-fluid galleryImageAbout' alt="" /></a>
                        <a href={require("../assets/images/photo-album/family/4.jpg")} data-fancybox="gallery"><img src={require("../assets/images/photo-album/family/4.jpg")} className='img-fluid galleryImageAbout' alt="" /></a>
                    </div>
                </section>

                <h2 className="pageSubtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eaque, ab dolor, vel quibusdam totam id sint itaque doloribus expedita animi? Fugiat id quos veritatis, voluptate eligendi perferendis repellendus odio?</h2>

            </section>

            <BackToHome />

            <Footer />

        </main >)
}

export default About
