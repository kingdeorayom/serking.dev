import Footer from '../Footer'
import BackToPhotoAlbum from '../BackToPhotoAlbum'
import images from '../../../assets/scripts/image-directories/socofam.dir.js'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const SoCoFam = () => {

    Fancybox.bind("[data-fancybox]", {
        infinite: true,
    });

    return (
        <main id='socofam'>

            <BackToPhotoAlbum />

            <section id="intro">
                <h1 className="pageTitle">Soco Fam</h1>
                <h2 className="pageSubtitle">Soco Fam pictures</h2>
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

export default SoCoFam;