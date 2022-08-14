import { Link } from "react-router-dom";
import { HiExternalLink } from 'react-icons/hi'

const Navigation = () => {
    return (
        <section id="navigation">
            <div className="navigationItem">
                <Link to="/apps" className="navigationTitle">Apps</Link>
                <h1 className="navigationSubtitle">Personal apps &amp; works</h1>
            </div>
            <div className="navigationItem">
                <Link to="/about" className="navigationTitle">About</Link>
                <h1 className="navigationSubtitle">About me and what I do</h1>
            </div>
            <div className="navigationItem">
                <Link to="/photo-album" className="navigationTitle">Photo Album</Link>
                <h1 className="navigationSubtitle">Photographs and memories</h1>
            </div>
            <div className="navigationItem">
                <Link to="/quotes" className="navigationTitle">Quotes</Link>
                <h1 className="navigationSubtitle">Get motivated</h1>
            </div>
            <div className="navigationItem">
                <a href="https://kingdeorayom.github.io/portfolio-archived/" className="navigationTitle" target="_blank" rel="noopener noreferrer">Archives <HiExternalLink className="HiExternalLink" /></a>

                <h1 className="navigationSubtitle">Old design portfolio</h1>
            </div>
            {/* <Link to="https://kingdeorayom.github.io/portfolio-archived/" className="navigationTitle">Old Portfolio <HiExternalLink className="HiExternalLink" /></Link> */}
        </section>)
}

export default Navigation