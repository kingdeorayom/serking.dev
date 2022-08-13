import { Link } from "react-router-dom";

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
                <Link to="/notes" className="navigationTitle">Notes</Link>
                <h1 className="navigationSubtitle">Words and random thoughts</h1>
            </div>
        </section>)
}

export default Navigation