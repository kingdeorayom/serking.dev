import { useEffect } from 'react';
import Hero from './components/Hero'
import Navigation from './components/Navigation'

import '../assets/css/home.css'

const Home = () => {

  useEffect(() => {
    document.title = 'Serking | Software Developer';
  });

  return (

    <main id='home'>
      <Hero />
      <Navigation />
    </main>

  );
}

export default Home;