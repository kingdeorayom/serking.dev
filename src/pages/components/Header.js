import { Link } from 'react-router-dom';
import HeaderImage from '../../assets/images/self/serking-cartoon.png'

const Header = (currentTitle) => {

    return (
        <main id="header">

            <div className="navControl d-flex align-items-center">
                <Link to="/" className='d-flex align-items-center header__navigation'>
                    <img src={HeaderImage} alt="Serking de Orayom" className='header__image' />
                    <p className='ms-2 my-2 header__name'>serking</p>
                    <p className='ms-1 my-2 text-secondary fw-bold'>/</p>
                </Link>
                <div className="dropdown">
                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{currentTitle.pageTitle}</button>
                    <ul className="dropdown-menu">
                        <Link to="/about" className='dropdown-item'>About</Link>
                        <Link to="/apps" className='dropdown-item'>Apps</Link>
                        <Link to="/notes" className='dropdown-item'>Notes</Link>
                    </ul>
                </div>
            </div>

        </main >
    );
}

export default Header;