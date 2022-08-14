import Footer from '../../components/Footer'
import BackButton from '../../components/BackButton'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const GroupStudy = () => {
    return (
        <main id='group-study'>

            <BackButton />

            <section id="intro">
                <h1 className="pageTitle">Group Study</h1>
                <h2 className="pageSubtitle">Group Study pictures</h2>
                <hr className='horizontalLine' />
            </section>

            <section className='my-5'>

            </section>

            <Footer />

        </main >
    )
}

export default GroupStudy;