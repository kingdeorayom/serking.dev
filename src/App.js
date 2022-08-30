import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"
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

function App() {

    const [display, setDisplay] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="apps" element={<Apps />} />
                <Route path="about" element={<About />} />
                <Route path="notes" element={(<Notes setDisplay={setDisplay} />)} />
                <Route path="notes/post" element={(<Post display={display} />)} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;