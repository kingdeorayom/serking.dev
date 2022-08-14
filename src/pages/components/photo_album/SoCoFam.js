import Footer from '../Footer'
import BackToPhotoAlbum from '../BackToPhotoAlbum'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const SoCoFam = () => {

    Fancybox.bind("[data-fancybox]", {
        infinite: true,
    });

    const images = [
        "../../images/photo-album/socofam/banner.jpg",
        "../../images/photo-album/socofam/1.jpg",
        "../../images/photo-album/socofam/2.jpg",
        "../../images/photo-album/socofam/3.jpg",
        "../../images/photo-album/socofam/4.jpg",
        "../../images/photo-album/socofam/5.jpg",
        "../../images/photo-album/socofam/6.jpg",
        "../../images/photo-album/socofam/7.jpg",
        "../../images/photo-album/socofam/8.jpg",
        "../../images/photo-album/socofam/9.jpg",
        "../../images/photo-album/socofam/10.jpg",
        "../../images/photo-album/socofam/11.jpg",
        "../../images/photo-album/socofam/12.jpg",
        "../../images/photo-album/socofam/13.jpg",
        "../../images/photo-album/socofam/14.jpg",
        "../../images/photo-album/socofam/15.jpg",
    ]

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