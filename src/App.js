import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"
import Home from './pages/Home';
import Apps from './pages/Apps';
import About from './pages/About';
import Notes from './pages/Notes';
import Posts from './pages/components/Posts';
import Works from './pages/components/Works';
import PageNotFound from './pages/PageNotFound';
import Footer from './pages/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/index.css';

function App() {

    const [post, setPost] = useState(null);
    const [work, setWork] = useState(null);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="apps" element={<Apps setWork={setWork} />} />
                <Route path="about" element={<About />} />
                <Route path="notes" element={(<Notes setPost={setPost} />)} />
                <Route path="notes/post" element={(<Posts post={post} />)} />
                <Route path="apps/work" element={(<Works work={work} />)} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;