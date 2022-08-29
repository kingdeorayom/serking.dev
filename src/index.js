import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Apps from './pages/Apps';
import About from './pages/About';
import Notes from './pages/Notes';
import Post from './pages/components/Post';
import PageNotFound from './pages/PageNotFound';
import Footer from './pages/components/Footer'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="apps" element={<Apps />} />
        <Route path="about" element={<About />} />
        <Route path="notes" element={(<Notes />)} />
        <Route path="notes/post" element={(<Post />)} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);