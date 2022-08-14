import { FaChevronCircleLeft } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

const BackButton = () => {

    let back = useNavigate();

    return (
        <FaChevronCircleLeft className="FaChevronCircleLeft" onClick={() => back(-1)} />
    )
}

export default BackButton