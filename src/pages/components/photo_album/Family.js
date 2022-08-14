import Footer from '../../components/Footer'
import BackButton from '../../components/BackButton'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const Family = () => {

    return (
        <main id='family'>

            <BackButton />

            <section id="intro">
                <h1 className="pageTitle">Family</h1>
                <h2 className="pageSubtitle">Family pictures</h2>
                <hr className='horizontalLine' />
            </section>

            <section className='my-5'>
                <div className="gallery mb-2">
                    <a href="../../images/photo-album/family/1.jpg" data-fancybox="gallery"><img src="../../images/photo-album/family/1.jpg" className='img-fluid galleryImage' alt="" /></a>
                    <a href="../../images/photo-album/family/2.jpg" data-fancybox="gallery"><img src="../../images/photo-album/family/2.jpg" className='img-fluid galleryImage' alt="" /></a>
                    <a href="../../images/photo-album/family/3.jpg" data-fancybox="gallery"><img src="../../images/photo-album/family/3.jpg" className='img-fluid galleryImage' alt="" /></a>
                </div>
            </section>

            <Footer />

        </main >
    )
}

export default Family;