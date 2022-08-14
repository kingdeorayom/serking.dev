import Footer from '../../components/Footer'
import BackToPhotoAlbum from '../../components/BackToPhotoAlbum'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const PowerPuff = () => {

    Fancybox.bind("[data-fancybox]", {
        infinite: true,
    });

    const images = [
        "../../images/photo-album/power-puff/banner.jpg",
        "../../images/photo-album/power-puff/1.jpg",
        "../../images/photo-album/power-puff/2.jpg",
        "../../images/photo-album/power-puff/3.jpg",
        "../../images/photo-album/power-puff/4.jpg",
        "../../images/photo-album/power-puff/5.jpg",
        "../../images/photo-album/power-puff/6.jpg",
    ]

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