import Footer from './components/Footer'
import BackButton from './components/BackButton'
import works from '../assets/json/works.json'

const Apps = () => {

    return (
        <main id='apps'>

            <BackButton />

            <section id="intro">
                <h1 id="pageTitle">Apps</h1>
                <h2 id="pageSubtitle">Personal apps &amp; works</h2>
            </section>

            <section className='my-5'>
                <div className="row text-dark">
                    {
                        works.map((work) => {
                            return <div className="col-sm-12 col-md-6 mb-4 d-flex justify-content-center" key={work.id}>
                                <div className="card">
                                    <img src={work.image_path} className="card-img-top" alt={work.image_desc} />
                                    <div className="card-body">
                                        <h5>{work.title}</h5>
                                        <p className="card-text">{work.description}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>

            <Footer />

        </main >)
}

export default Apps
