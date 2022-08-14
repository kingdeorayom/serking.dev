import Footer from '../../components/Footer'
import BackToPhotoAlbum from '../../components/BackToPhotoAlbum'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const GroupStudy = () => {

    Fancybox.bind("[data-fancybox]", {
        infinite: true,
    });

    const images = [
        "../../images/photo-album/group-study/banner.jpg",
        "../../images/photo-album/group-study/1.jpg",
        "../../images/photo-album/group-study/2.jpg",
        "../../images/photo-album/group-study/3.jpg",
        "../../images/photo-album/group-study/4.jpg",
        "../../images/photo-album/group-study/5.jpg",
        "../../images/photo-album/group-study/6.jpg",
        "../../images/photo-album/group-study/7.jpg",
        "../../images/photo-album/group-study/8.jpg",
        "../../images/photo-album/group-study/9.jpg",
        "../../images/photo-album/group-study/10.jpg",
        "../../images/photo-album/group-study/11.jpg",
        "../../images/photo-album/group-study/12.jpg",
        "../../images/photo-album/group-study/13.jpg",
        "../../images/photo-album/group-study/14.jpg",
    ]

    return (
        <main id='group-study'>

            <BackToPhotoAlbum />

            <section id="intro">
                <h1 className="pageTitle">Group Study</h1>
                <h2 className="pageSubtitle">Group Study pictures</h2>
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

export default GroupStudy;