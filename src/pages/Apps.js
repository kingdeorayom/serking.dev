import Footer from './components/Footer'
import BackButton from './components/BackButton'
import works from '../assets/json/works.json'

const Apps = () => {

    return (
        <main id='apps'>

            <BackButton />

            <section id="intro">
                <h1 className="pageTitle">Apps</h1>
                <h2 className="pageSubtitle">Below are the projects &amp; personal apps I've worked on.</h2>
                <hr className='horizontalLine' />
            </section>

            <section className='my-5'>
                <div className="row text-dark">
                    {
                        works.map((work) => {
                            return <div className="col-sm-12 col-md-6 mb-4 d-flex justify-content-center" key={work.id}>
                                <div className="card card-app">
                                    <a href={work.link} target="_blank" rel='noreferrer'>
                                        <div className="cardImage">
                                            <img src={work.image_path} className="card-img-top img-fluid" alt={work.image_desc} />
                                        </div>
                                        <div className="card-body">
                                            <h5>{work.title}</h5>
                                            <p className="card-text">{work.description}</p>
                                        </div>
                                    </a>
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
