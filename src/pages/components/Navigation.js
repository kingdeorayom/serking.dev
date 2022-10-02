import { Link } from "react-router-dom";
import { FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import mountain from '../../assets/images/ui/nav/mountain.png'
import notes from '../../assets/images/ui/nav/notes.png'

const Navigation = () => {
    return (
        <section id='navigation'>

            <div className="row">
                <div className="col-sm-12 col-md-6 mb-4">
                    <Link to="/apps" className='navigation__link__text'>
                        <div className="navigation__item apps">
                            <h1 className="navigation__title">Apps</h1>
                            <h1 className="navigation__subtitle">Personal apps &amp; works</h1>
                            <div className="navImageContainer text-end">
                                <img src={mountain} id='mountainImage' alt="mountain" />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-sm-12 col-md-6 mb-4">
                    <Link to="/notes" className='navigation__link__text'>
                        <div className="navigation__item notes">
                            <div className="navImageContainer text-center">
                                <img src={notes} id='notesImage' alt="notes" />
                            </div>
                            <h1 className="navigation__title">Notes</h1>
                            <h1 className="navigation__subtitle">About software development</h1>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="row">

                <div className="col-6 col-md-3 mb-4">
                    <a href='https://twitter.com/kingdeorayom' target={"_blank"} rel="noreferrer">
                        <div className="navigation__item twitter">
                            <div className="d-flex align-items-center justify-content-center">
                                <FaTwitter className="navigation__social__image" />
                            </div>
                        </div>
                    </a>
                </div>

                <div className="col-6 col-md-3 mb-4">
                    <a href='https://github.com/kingdeorayom' target={"_blank"} rel="noreferrer">
                        <div className="navigation__item github">
                            <div className="d-flex align-items-center justify-content-center">
                                <FaGithub className="navigation__social__image" />
                            </div>
                        </div>
                    </a>
                </div>

                <div className="col-6 col-md-3 mb-4">
                    <a href='https://www.linkedin.com/in/kingdeorayom/' target={"_blank"} rel="noreferrer">
                        <div className="navigation__item linkedin">
                            <div className="d-flex align-items-center justify-content-center">
                                <FaLinkedin className="navigation__social__image" />
                            </div>
                        </div>
                    </a>
                </div>

            </div>

        </section>
    )
}

export default Navigation