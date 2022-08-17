import Footer from '../../components/Footer'
import BackToPhotoAlbum from '../../components/BackToPhotoAlbum'
import images from '../../../assets/scripts/image-directories/groupstudy.dir.js'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const GroupStudy = () => {

    Fancybox.bind("[data-fancybox]", {
        infinite: true,
    });

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