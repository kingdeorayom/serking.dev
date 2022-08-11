import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function Home() {

  return (

    <main id='home'>
      <Hero />
      <hr className='horizontalLine' />
      <Navigation />
      <hr className='horizontalLine' />
      <Footer />
    </main>

  );
}

export default Home;