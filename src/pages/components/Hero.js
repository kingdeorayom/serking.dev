import '../../assets/css/hero.css';
import HeroImage from '../../assets/images/self/serking-cartoon.png'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="hero">
            <Link to="/"><img src={HeroImage} alt="Serking de Orayom" id='hero-image' title='Contact IG: @zelpixels for commissions' /></Link>
            <h1 id="heroName">serking</h1>
            <h2 id="heroTitle">Welcome to my personal page. Feel free to look around.</h2>
            <Link to="/about" id="readMore"><h6>Read more <FaArrowRight className='FaArrowRight' /></h6></Link>
        </section>
    )
}

export default Hero
