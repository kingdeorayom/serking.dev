import Footer from '../../components/Footer'
import BackToPhotoAlbum from '../../components/BackToPhotoAlbum'
import images from '../../../assets/scripts/image-directories/family.dir.js'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const Family = () => {

    Fancybox.bind("[data-fancybox]", {
        infinite: true,
    });

    return (
        <main id='family'>

            <BackToPhotoAlbum />

            <section id="intro">
                <h1 className="pageTitle">Family</h1>
                <h2 className="pageSubtitle">Family pictures</h2>
                <hr className='horizontalLine' />
            </section>

            <section className='my-5'>
                <div className="gallery mb-2">
                    {images.map((imagePath => {
                        return <a href={imagePath} data-fancybox="gallery"><img src={imagePath} className='img-fluid galleryImage' alt="" /></a>
                    }))}
                </div>
            </section>

            <Footer />

        </main >
    )
}

export default Family;