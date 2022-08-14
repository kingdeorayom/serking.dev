import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Apps from './pages/Apps';
import About from './pages/About';
import Photos from './pages/Photos';
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
        <Route index element={<Home />} />
        <Route path="apps" element={<Apps />} />
        <Route path="about" element={<About />} />
        <Route path="photos" element={<Photos />} />
        <Route path="quotes" element={<Quotes />} />
        <Route path="family" element={<Family />} />
        <Route path="socofam" element={<SoCoFam />} />
        <Route path="truepa-feets" element={<TruePaFeets />} />
        <Route path="power-puff" element={<PowerPuff />} />
        <Route path="group-study" element={<GroupStudy />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);