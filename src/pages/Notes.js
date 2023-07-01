import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Header from './components/Header'
import notes from '../assets/scripts/notes'
import '../assets/css/notes.css'

const Notes = ({ setPost }) => {

    useEffect(() => {
        document.title = 'Notes | Serking';
    });

    return (
        <main id='wrapper'>

            <section id="header">
                <Header pageTitle="notes" />
            </section>

            <section id="notes">

                <h1 className="page__title">Notes</h1>

                <div className="row my-5">
                    {notes.map((note) => {
                        return <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={note.note_id}>
                            <Link onClick={() => setPost(note.note_id)} to={note.note_link} className='notes__link__text'>
                                <div className="notes__item">
                                    <img src={note.note_image} className="notes__emoji my-2" alt="notes" />
                                    <h1 className="notes__subtitle"><span>{note.note_title}</span></h1>
                                    <h1 className="notes__date mt-1">{note.note_date}</h1>
                                </div>
                            </Link>
                        </div>
                    })}
                </div>

            </section>

        </main >
    )
}

export default Notes
