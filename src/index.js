import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Apps from './pages/Apps';
import About from './pages/About';
import Notes from './pages/Notes';
import Photos from './pages/Photos';
import NoPage from './pages/NoPage';
import './assets/css/index.css';

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
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);