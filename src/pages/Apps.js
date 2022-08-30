import { useEffect } from 'react';
import Header from './components/Header'

const Apps = () => {

    useEffect(() => {
        document.title = 'Apps | Serking';
    });

    return (
        <main id='wrapper'>

            <section id="header">
                <Header pageTitle="apps" />
            </section>

            <section id="apps">
                <h1 className="page__title">Apps</h1>
                <h2 className="page__content">Below are the projects &amp; personal apps I've worked on.</h2>
            </section>

        </main >
    )
}

export default Apps
