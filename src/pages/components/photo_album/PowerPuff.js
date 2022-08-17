import Footer from '../../components/Footer'
import BackToPhotoAlbum from '../../components/BackToPhotoAlbum'
import images from '../../../assets/scripts/image-directories/powerpuff.dir.js'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const PowerPuff = () => {

    Fancybox.bind("[data-fancybox]", {
        infinite: true,
    });

    return (
        <main id='power-puff'>

            <BackToPhotoAlbum />

            <section id="intro">
                <h1 className="pageTitle">Power Puff</h1>
                <h2 className="pageSubtitle">Power Puff pictures</h2>
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

export default PowerPuff;