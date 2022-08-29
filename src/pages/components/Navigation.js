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
                    <Link to="/apps" className='navigationLinkText'>
                        <div className="navigationItem apps">
                            <h1 className="navigationTitle">Apps</h1>
                            <h1 className="navigationSubtitle">Personal apps &amp; works</h1>
                            <div className="navImageContainer text-end">
                                <img src={mountain} id='mountainImage' alt="mountain" />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-sm-12 col-md-6 mb-4">
                    <Link to="/notes" className='navigationLinkText'>
                        <div className="navigationItem notes">
                            <div className="navImageContainer text-center">
                                <img src={notes} id='notesImage' alt="notes" />
                            </div>
                            <h1 className="navigationTitle">Notes</h1>
                            <h1 className="navigationSubtitle">My personal space</h1>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="row">

                <div className="col-6 col-md-3 mb-4">
                    <a href='https://twitter.com/kingdeorayom' target={"_blank"} rel="noreferrer">
                        <div className="navigationItem twitter">
                            <div className="d-flex align-items-center justify-content-center">
                                <FaTwitter className="socialImage" />
                            </div>
                        </div>
                    </a>
                </div>

                <div className="col-6 col-md-3 mb-4">
                    <a href='https://github.com/kingdeorayom' target={"_blank"} rel="noreferrer">
                        <div className="navigationItem github">
                            <div className="d-flex align-items-center justify-content-center">
                                <FaGithub className="socialImage" />
                            </div>
                        </div>
                    </a>
                </div>

                <div className="col-6 col-md-3 mb-4">
                    <a href='https://www.linkedin.com/in/kingdeorayom/' target={"_blank"} rel="noreferrer">
                        <div className="navigationItem linkedin">
                            <div className="d-flex align-items-center justify-content-center">
                                <FaLinkedin className="socialImage" />
                            </div>
                        </div>
                    </a>
                </div>

            </div>

        </section>
    )
}

export default Navigation