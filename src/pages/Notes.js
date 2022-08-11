import Footer from './components/Footer'
import BackButton from './components/BackButton'


const Notes = () => {
    return (
        <main id='notes'>

            <BackButton />

            <section id="intro">
                <h1 id="pageTitle">Notes</h1>
                <h2 id="pageSubtitle">Random thoughts about my web development journey.</h2>
            </section>

            <Footer />

        </main>
    );
}

export default Notes
