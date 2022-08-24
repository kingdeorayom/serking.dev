import Header from './components/Header'
import { useEffect } from 'react';

const Apps = () => {

    useEffect(() => {
        document.title = 'Apps | Serking | Software Developer';
    });

    return (
        <main id='wrapper'>

            <section id="header">
                <Header pageTitle="apps" />
            </section>

            <section id="apps">
                <h1 className="pageTitle">Apps</h1>
                <h2 className="pageSubtitle">Below are the projects &amp; personal apps I've worked on.</h2>
            </section>

        </main >
    )
}

export default Apps
