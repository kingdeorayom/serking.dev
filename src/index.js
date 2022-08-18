import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Apps from './pages/Apps';
import About from './pages/About';
import PhotoAlbum from './pages/PhotoAlbum';
import Quotes from './pages//Quotes';
import NoPage from './pages/NoPage';
import Family from './pages/components/photo_album/Family'
import SoCoFam from './pages/components/photo_album/SoCoFam'
import TruePaFeets from './pages/components/photo_album/TruePaFeets'
import PowerPuff from './pages/components/photo_album/PowerPuff'
import GroupStudy from './pages/components/photo_album/GroupStudy'
import 'animate.css'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/index.css';
import './assets/css/about.css';
import './assets/css/cards.css';
import './assets/css/hero.css';
import './assets/css/icons.css';
import './assets/css/navigation.css'
import './assets/css/photos.css'
import './assets/css/footer.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="apps" element={<Apps />} />
        <Route path="about" element={<About />} />
        <Route path="photo-album" element={<PhotoAlbum />} />
        <Route path="quotes" element={<Quotes />} />
        <Route path="photo-album/family" element={<Family />} />
        <Route path="photo-album/socofam" element={<SoCoFam />} />
        <Route path="photo-album/truepa-feets" element={<TruePaFeets />} />
        <Route path="photo-album/power-puff" element={<PowerPuff />} />
        <Route path="photo-album/group-study" element={<GroupStudy />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);