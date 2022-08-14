import { FaChevronCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const BackToPhotoAlbum = () => {

    return (
        <Link to="/photo-album"><FaChevronCircleLeft className="FaChevronCircleLeft" /></Link>
    )
}

export default BackToPhotoAlbum