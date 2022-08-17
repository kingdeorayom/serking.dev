import HeroImage from '../../assets/images/self/serking-cartoon.png'

const Hero = () => {
    return (
        <section id="hero">
            <img src={HeroImage} alt="Serking de Orayom" id='hero-image' title='Contact IG: @zelpixels for commissions' />
            <h1 id="heroName">Serking de Orayom</h1>
            <h2 id="heroTitle">Welcome to my personal page. Feel free to look around.</h2>
            <hr className='horizontalLine' />
        </section>
    )
}

export default Hero
