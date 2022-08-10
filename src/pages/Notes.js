import '../assets/css/notes.css';
import Footer from './components/Footer'
import Navigation from './components/Navigation'


function Notes() {
    return (
        <main id='notes'>

            <Navigation />

            <section id="intro">
                <h1 id="pageTitle">Notes</h1>
                <h2 id="pageSubtitle">Random thoughts about my web development journey.</h2>
            </section>

            <Footer />

        </main>)
}

export default Notes
