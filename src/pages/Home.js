import '../assets/css/home.css';
import SerkingImage from '../assets/images/serking-cartoon.png'
import Footer from './components/Footer'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from "react-router-dom";

function Home() {

  return (

    <main id='home'>

      <section id="hero">

        {/* <div id="homeControl">
                <Link to="/"><img src={SerkingImage} id="nav-image" alt="Serking de Orayom" /></Link>
                <Link to="/" className="navigationLink"> Serking </Link>
            </div> */}

        <img src={SerkingImage} alt="Serking de Orayom" id='hero-image' />
        <h1 id="heroName">Serking de Orayom</h1>
        <h2 id="heroTitle">A web developer from Bi&#241;an, Laguna, Philippines. Feel free to look around.</h2>
        {/* <h2 id="heroTitle">Welcome to my personal page. Feel free to look around.</h2> */}
      </section>

      <hr className='horizontalLine' />

      <section id="navigation">
        <div className="navigationItem">
          <Link to="/apps" className="navigationTitle forHover">Apps <FaArrowRight className='fa-right-arrow-icon' /></Link>
          <h1 className="navigationSubtitle">Personal apps &amp; works</h1>
        </div>
        <div className="navigationItem">
          <Link to="/about" className="navigationTitle forHover">About <FaArrowRight className='fa-right-arrow-icon' /></Link>
          <h1 className="navigationSubtitle">About me and what I do</h1>
        </div>
        <div className="navigationItem">
          <Link to="/notes" className="navigationTitle forHover">Notes <FaArrowRight className='fa-right-arrow-icon' /></Link>
          <h1 className="navigationSubtitle">About my web development journey</h1>
        </div>
        <div className="navigationItem">
          <Link to="/photos" className="navigationTitle forHover">Photos <FaArrowRight className='fa-right-arrow-icon' /></Link>
          <h1 className="navigationSubtitle">Photos from my travels</h1>
        </div>
      </section>

      <hr className='horizontalLine' />

      <Footer />

    </main>

  );
}

export default Home;