import Footer from '../../components/Footer'
import BackButton from '../../components/BackButton'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const PowerPuff = () => {
    return (
        <main id='power-puff'>

            <BackButton />

            <section id="intro">
                <h1 className="pageTitle">Power Puff</h1>
                <h2 className="pageSubtitle">Power Puff pictures</h2>
                <hr className='horizontalLine' />
            </section>

            <section className='my-5'>

            </section>

            <Footer />

        </main >
    )
}

export default PowerPuff;