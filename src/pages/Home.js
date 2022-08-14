import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <main id='home'>
      <Hero />
      <Navigation />
      <Footer />
    </main>

  );
}

export default Home;