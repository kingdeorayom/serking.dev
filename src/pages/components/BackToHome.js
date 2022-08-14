import { FaChevronCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const BackToHome = () => {

    return (
        <Link to="/"><FaChevronCircleLeft className="FaChevronCircleLeft" /></Link>
    )
}

export default BackToHome