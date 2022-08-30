import { useState, useEffect } from 'react';
import MarkDown from 'markdown-to-jsx'
import notes from '../../assets/scripts/notes'

const Post = ({ display }) => {

    const file_name = notes[display].note_file_name

    const [post, setPost] = useState('')

    useEffect(() => {
        import(`../../assets/markdown/${file_name}`)
            .then(response => {
                fetch(response.default)
                    .then(response => response.text())
                    .then(response => setPost(response));
            })
            .catch(error => console.log(error));
    })

    return (
        <MarkDown>{post}</MarkDown>
    )
}

export default Post