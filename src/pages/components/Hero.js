import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import HeroImage from '../../assets/images/self/serking-cartoon.png'
import '../../assets/css/hero.css';

const Hero = () => {
    return (
        <section id="hero">
            <Link to="/"><img src={HeroImage} alt="Serking de Orayom" className='hero__image' /></Link>
            <h1 className="hero__name">serking</h1>
            <h2 className="hero__title">A software developer focusing on web and mobile applications.</h2>
            <Link to="/about" className="hero__read__more"><h6>Read more <FaArrowRight className='FaArrowRight' /></h6></Link>
        </section>
    )
}

export default Hero
