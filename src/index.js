import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Apps from './pages/Apps';
import About from './pages/About';
import Notes from './pages/Notes';
import Photos from './pages/Photos';
import Quotes from './pages//Quotes';
import NoPage from './pages/NoPage';
import 'animate.css'
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
        <Route path="notes" element={<Notes />} />
        <Route path="photos" element={<Photos />} />
        <Route path="quotes" element={<Quotes />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);