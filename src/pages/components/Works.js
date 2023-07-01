import { useState, useEffect } from 'react';
import Header from './Header'
import MarkDown from 'markdown-to-jsx'
import works from '../../assets/scripts/works'

const Work = ({ work }) => {

    if (work == null) {
        window.location.replace("/apps");
    }

    useEffect(() => {
        document.title = works[work].work_title + " | Serking";
    });

    const file_name = works[work].work_file_name

    const [markdown, setMarkdown] = useState('')

    useEffect(() => {
        import(`../../assets/markdown/works/${file_name}`)
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
                <Header pageTitle="apps" />
            </section>
            <section id='work'>
                <MarkDown>{markdown}</MarkDown>
            </section>
        </main>
    )
}

export default Work