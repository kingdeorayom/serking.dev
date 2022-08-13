import Footer from './components/Footer'
import BackButton from './components/BackButton'

const Photos = () => {

    return (
        <main id='photos'>

            <BackButton />

            <section id="intro">
                <h1 className="pageTitle">Photo Album</h1>
                <h2 className="pageSubtitle">Memories shared together that will forever be treasured.</h2>
                <hr className='horizontalLine' />
            </section>

            <section className='my-5'>

            </section>

            <Footer />

        </main >
    );
}

export default Photos
