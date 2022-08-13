import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (

        <section id='footer'>
            <hr className='horizontalLine' />
            <div className="d-flex justify-content-center mt-1 mb-4">
                <a href='https://www.facebook.com/kingdeorayom' className='socials-icon-link' target={"_blank"} rel="noreferrer"><FaFacebook className='socials-icon' /></a>
                <a href='https://www.twitter.com/kingdeorayom' className='socials-icon-link' target={"_blank"} rel="noreferrer"><FaTwitter className='socials-icon' /></a>
                <a href='https://www.instagram.com/kingdeorayom' className='socials-icon-link' target={"_blank"} rel="noreferrer"><FaInstagram className='socials-icon' /></a>
                <a href='https://www.github.com/kingdeorayom' className='socials-icon-link' target={"_blank"} rel="noreferrer"><FaGithub className='socials-icon' /></a>
                <a href='https://www.linkedin.com/in/kingdeorayom' className='socials-icon-link' target={"_blank"} rel="noreferrer"><FaLinkedin className='socials-icon' /></a>
            </div>
            <h1 id="footerText">&copy; 2022 Serking de Orayom</h1>
        </section >

    )
}

export default Footer;