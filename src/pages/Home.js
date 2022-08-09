import '../assets/css/home.css';
import SerkingImage from '../assets/images/serking-cartoon.png'
import Footer from './components/Footer'
import { FaArrowRight } from 'react-icons/fa'

function Home() {
  return (

    <main id='home'>

      <section id="hero">
        <img src={SerkingImage} alt="Serking de Orayom" id='hero-image' />
        <h1 id="heroName">Serking de Orayom</h1>
        <h2 id="heroTitle">Welcome to my personal page. Feel free to look around.</h2>
      </section>

      <hr className='horizontalLine' />

      <section id="navigation">
        <div className="navigationItem">
          <h1 className="navigationTitle">Apps <FaArrowRight className='arrow-icon' /></h1>
          <h1 className="navigationSubtitle">Personal apps &amp; works</h1>
        </div>
        <div className="navigationItem">
          <h1 className="navigationTitle">About <FaArrowRight className='arrow-icon' /></h1>
          <h1 className="navigationSubtitle">About me and what I do</h1>
        </div>
        <div className="navigationItem">
          <h1 className="navigationTitle">Notes <FaArrowRight className='arrow-icon' /></h1>
          <h1 className="navigationSubtitle">About my web development journey</h1>
        </div>
        <div className="navigationItem">
          <h1 className="navigationTitle">Photos <FaArrowRight className='arrow-icon' /></h1>
          <h1 className="navigationSubtitle">Photo album</h1>
        </div>
      </section>

      <hr className='horizontalLine' />

      <Footer />

    </main>



  );
}

export default Home;