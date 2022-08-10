import { Link } from "react-router-dom";
import { FaChevronCircleLeft } from 'react-icons/fa'

function Navigation() {

    return (
        <section id="navControl">
            <Link to="/" className="navigationLink"><FaChevronCircleLeft className="bs-circle-arrow-icon" /></Link>
        </section>
    )
}

export default Navigation