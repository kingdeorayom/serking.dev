import { useState, useEffect } from 'react';
import Header from './Header'
import MarkDown from 'markdown-to-jsx'
import notes from '../../assets/scripts/notes'

const Post = ({ post }) => {

    if (post == null) {
        window.location.replace("/notes");
    }

    useEffect(() => {
        document.title = notes[post].note_title + " | Serking";
    });

    const file_name = notes[post].note_file_name

    const [markdown, setMarkdown] = useState('')

    useEffect(() => {
        import(`../../assets/markdown/notes/${file_name}`)
            .then(response => {
                fetch(response.default)
                    .then(response => response.text())
                    .then(response => setMarkdown(response));
            })
            .catch(error => console.log(error));
    })

    return (
        <main id='wrapper'>
            <section id="header">
                <Header pageTitle="notes" />
            </section>
            <section id='post'>
                <MarkDown>{markdown}</MarkDown>
            </section>
        </main>
    )
}

export default Post