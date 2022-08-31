import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Header from './components/Header'
import works from '../assets/scripts/works'
import '../assets/css/apps.css'

const Apps = ({ setWork }) => {

    useEffect(() => {
        document.title = 'Apps | Serking';
    });

    return (
        <main id='wrapper'>

            <section id="header">
                <Header pageTitle="apps" />
            </section>

            <section id="apps">
                <h1 className="page__title">Apps</h1>
                <h2 className="page__content">Below are the projects &amp; personal apps I've worked on.</h2>

                <div className="row my-5">
                    {works.map((work) => {
                        return <div className="col-sm-12 col-md-6 mb-4" key={work.work_id}>
                            <Link onClick={() => setWork(work.work_id)} to={work.work_link} className='apps__link__text'>
                                <div className="apps__item">
                                    <img src={work.work_image} className="app__image img-fluid mt-3 mb-4" alt="notes" />
                                    <h1 className="apps__title"><span>{work.work_title}</span></h1>
                                    <h1 className="apps__subtitle"><span>{work.work_description}</span></h1>
                                </div>
                            </Link>
                        </div>
                    })}

                </div>

            </section>

        </main >
    )
}

export default Apps
