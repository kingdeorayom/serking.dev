import Footer from '../Footer'
import BackToPhotoAlbum from '../BackToPhotoAlbum'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const TruePaFeets = () => {

    Fancybox.bind("[data-fancybox]", {
        infinite: true,
    });

    const images = [
        "../../images/photo-album/truepa-feets/banner.jpg",
        "../../images/photo-album/truepa-feets/1.jpg",
        "../../images/photo-album/truepa-feets/2.jpg",
        "../../images/photo-album/truepa-feets/3.jpg",
        "../../images/photo-album/truepa-feets/4.jpg",
        "../../images/photo-album/truepa-feets/5.jpg",
        "../../images/photo-album/truepa-feets/6.jpg",
        "../../images/photo-album/truepa-feets/7.jpg",
        "../../images/photo-album/truepa-feets/8.jpg",
        "../../images/photo-album/truepa-feets/9.jpg",
        "../../images/photo-album/truepa-feets/10.jpg",
        "../../images/photo-album/truepa-feets/11.jpg",
    ]

    return (
        <main id='truepa-feets'>

            <BackToPhotoAlbum />

            <section id="intro">
                <h1 className="pageTitle">TruePa Feets</h1>
                <h2 className="pageSubtitle">TruePa Feets pictures</h2>
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

export default TruePaFeets;