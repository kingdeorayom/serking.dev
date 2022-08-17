import Footer from './components/Footer'
import BackToHome from './components/BackToHome'
import works from '../assets/scripts/works.js'
import { useEffect } from 'react'

const Apps = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main id='apps'>

            <BackToHome />

            <section id="intro">
                <h1 className="pageTitle">Apps</h1>
                <h2 className="pageSubtitle">Below are the projects &amp; personal apps I've worked on.</h2>
                <hr className='horizontalLine' />
            </section>

            <section className='my-5'>
                <div className="row text-dark">
                    {
                        works.map((item) => {
                            return <div className="col-sm-12 col-md-6 mb-4 d-flex justify-content-center" key={item.id}>
                                <div className="card card-app">
                                    <a href={item.link} target="_blank" rel='noreferrer'>
                                        <div className="cardImage">
                                            <img src={item.image_path} className="card-img-top img-fluid" alt={item.image_desc} />
                                        </div>
                                        <div className="card-body">
                                            <h5>{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
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
