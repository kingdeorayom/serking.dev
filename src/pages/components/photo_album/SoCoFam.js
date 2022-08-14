import Footer from '../Footer'
import BackButton from '../BackButton'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const SoCoFam = () => {
    return (
        <main id='socofam'>

            <BackButton />

            <section id="intro">
                <h1 className="pageTitle">Soco Fam</h1>
                <h2 className="pageSubtitle">Soco Fam pictures</h2>
                <hr className='horizontalLine' />
            </section>

            <section className='my-5'>

            </section>

            <Footer />

        </main >
    )
}

export default SoCoFam;