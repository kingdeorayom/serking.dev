import SerkingImage from '../../assets/images/serking-cartoon.png'

function Hero() {
    return (
        <section id="hero">
            <img src={SerkingImage} alt="Serking de Orayom" id='hero-image' title='Contact IG: @zelpixels for commissions' />
            <h1 id="heroName">Serking</h1>
            <h2 id="heroTitle">Personal page of Serking de Orayom, a web developer.</h2>
        </section>
    )
}

export default Hero
