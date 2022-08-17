import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './components/Footer'
import BackToHome from './components/BackToHome'
import photo_album from '../assets/scripts/photo-album.js';

const Photos = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main id='photos'>

            <BackToHome />

            <section id="intro">
                <h1 className="pageTitle">Photo Album</h1>
                <h2 className="pageSubtitle">Memories shared together that will forever be treasured.</h2>
                <hr className='horizontalLine' />
            </section>

            <section className='my-5'>

                <div className="row text-dark">
                    {
                        photo_album.map((album) => {
                            return <div className="col-sm-12 col-md-6 mb-4 d-flex justify-content-center" key={album.id}>
                                <div className="card card-photos">
                                    <Link to={album.path}>
                                        <div className="cardImage">
                                            <img src={album.image_path} className="card-img-top img-fluid" alt={album.image_desc} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{album.title}</h5>
                                            <p className="card-text">{album.description}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        })
                    }
                </div>

            </section>

            <Footer />

        </main >
    );
}

export default Photos
