import Hero from './components/Hero'
import { Link } from "react-router-dom";
import { HiExternalLink } from 'react-icons/hi'
import '../assets/css/home.css'
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    document.title = 'Serking | Software Developer';
  });

  return (

    <main id='home'>

      <Hero />

      <section id="navigation">
        <div className="navigationItem">
          <Link to="/apps" className="navigationTitle">Apps</Link>
          <h1 className="navigationSubtitle">Personal apps &amp; works</h1>
        </div>
        <div className="navigationItem">
          <a href="https://kingdeorayom.github.io/portfolio-archived/" className="navigationTitle" target="_blank" rel="noopener noreferrer">Archives <HiExternalLink className="HiExternalLink" /></a>
          <h1 className="navigationSubtitle">Old design portfolio</h1>
        </div>
      </section>

    </main>

  );
}

export default Home;