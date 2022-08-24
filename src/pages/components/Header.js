import { Link } from 'react-router-dom';
import HeaderImage from '../../assets/images/self/serking-cartoon.png'

const Header = () => {
    return (

        <main id="header">

            <div className="navControl d-flex align-items-center">
                <Link to="/" id='headerNav' className='d-flex align-items-center'>
                    <img src={HeaderImage} alt="Serking de Orayom" id='headerImage' />
                    <h5 className='ms-2 my-2' id='headerName'>serking</h5>
                    <h5 className='ms-1 my-2 text-secondary fw-bold'>/</h5>
                </Link>
                <div class="dropdown">
                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">about</button>
                    <ul class="dropdown-menu">
                        <Link to="/about" className='dropdown-item'>About</Link>
                        <Link to="/apps" className='dropdown-item'>Apps</Link>
                    </ul>
                </div>
            </div>


        </main>
    );
}

export default Header;