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
                        return <div className="col-sm-12 col-md-6 mb-4 d-flex justify-content-center">
                            <div class="apps__item">
                                <Link onClick={() => setWork(work.work_id)} to={work.work_link} className='apps__link__text'>
                                    <img src={work.work_image} className="img-fluid" style={{ borderTopLeftRadius: "0.5em", borderTopRightRadius: "0.5em" }} alt="works" />
                                    <div className="apps__text">
                                        <h5 class="apps_title">{work.work_title}</h5>
                                        <p class="apps__subtitle">{work.work_description}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    })}

                </div>

            </section>

        </main >
    )
}

export default Apps
