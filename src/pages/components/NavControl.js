import { FaChevronCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const NavControl = () => {

    return (
        <Link to="/"><FaChevronCircleLeft className="FaChevronCircleLeft" /></Link>
    )
}

export default NavControl