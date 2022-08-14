import Footer from './components/Footer'
import BackButton from './components/BackButton'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const Photos = () => {

    Fancybox.bind("[data-fancybox]", {
        infinite: true
    });

    return (
        <main id='photos'>

            <BackButton />

            <section id="intro">
                <h1 className="pageTitle">Photo Album</h1>
                <h2 className="pageSubtitle">Memories shared together that will forever be treasured.</h2>
                <hr className='horizontalLine' />
            </section>

            <section className='my-5'>

                <div className="gallery mb-2">
                    <a href="../../images/photo-album/king/banner.png" data-fancybox="gallery"><img src="../../images/photo-album/king/banner.png" className='img-fluid galleryImage' alt="" /></a>
                    <a href="../../images/photo-album/king/4.jpg" data-fancybox="gallery"><img src="../../images/photo-album/king/4.jpg" className='img-fluid galleryImage' alt="" /></a>
                </div>

            </section>

            <Footer />

        </main >
    );
}

export default Photos
