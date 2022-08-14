import Footer from '../Footer'
import BackButton from '../BackButton'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const TruePaFeets = () => {
    return (
        <main id='truepa-feets'>

            <BackButton />

            <section id="intro">
                <h1 className="pageTitle">TruePa Feets</h1>
                <h2 className="pageSubtitle">TruePa Feets pictures</h2>
                <hr className='horizontalLine' />
            </section>

            <section className='my-5'>

            </section>

            <Footer />

        </main >
    )
}

export default TruePaFeets;