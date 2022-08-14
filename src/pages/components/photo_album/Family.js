import Footer from '../../components/Footer'
import BackToPhotoAlbum from '../../components/BackToPhotoAlbum'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const Family = () => {

    Fancybox.bind("[data-fancybox]", {
        infinite: true,
    });

    const images = [
        "../../images/photo-album/family/banner.jpg",
        "../../images/photo-album/family/1.jpg",
        "../../images/photo-album/family/2.jpg",
        "../../images/photo-album/family/3.jpg",
        "../../images/photo-album/family/4.jpg",
        "../../images/photo-album/family/5.jpg",
        "../../images/photo-album/family/6.jpg",
        "../../images/photo-album/family/7.jpg",
        "../../images/photo-album/family/8.jpg",
        "../../images/photo-album/family/9.jpg",
        "../../images/photo-album/family/10.jpg",
        "../../images/photo-album/family/11.jpg",
        "../../images/photo-album/family/12.jpg",
        "../../images/photo-album/family/13.jpg",
        "../../images/photo-album/family/14.jpg",
        "../../images/photo-album/family/15.jpg",
        "../../images/photo-album/family/16.jpg",
        "../../images/photo-album/family/17.jpg",
        "../../images/photo-album/family/18.jpg",
        "../../images/photo-album/family/19.jpg",
        "../../images/photo-album/family/20.jpg",
        "../../images/photo-album/family/21.jpg",
    ]

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