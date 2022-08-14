import { useState } from "react";
import Footer from './components/Footer'
import BackToHome from './components/BackToHome'
import quotes from '../assets/json/quotes.json'
import { Link } from "react-router-dom";
import { useEffect } from 'react';

const Quotes = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const randomlyGeneratedNumber = Math.floor((Math.random() * 68))

    const [quote, setQuote] = useState(quotes[randomlyGeneratedNumber].quote_content);
    const [author, setQuoteAuthor] = useState(quotes[randomlyGeneratedNumber].quote_author);
    const [image, setQuoteAuthorImage] = useState(quotes[randomlyGeneratedNumber].quote_author_image);

    const handleClick = () => {

        const randomlyGeneratedNumber = Math.floor((Math.random() * 68))

        setQuote(quotes[randomlyGeneratedNumber].quote_content);
        setQuoteAuthor(quotes[randomlyGeneratedNumber].quote_author);
        setQuoteAuthorImage(quotes[randomlyGeneratedNumber].quote_author_image);
    }

    return (
        <main id='quotes'>

            <BackToHome />

            <section id="intro">
                <h1 className="pageTitle">Quotes</h1>
                <h2 className="pageSubtitle">Generate a random quote&mdash;fresh from my favorites.</h2>
            </section>

            <section className='my-5'>

                <div className="row text-dark">

                    <div className="col-sm-12 mb-4 d-flex justify-content-center">
                        <div className="card card-quotes">
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <img src={image} id="quoteAuthorImage" alt="Quote Author" />
                                </div>
                                <p className="card-title my-3" id="quoteTitle">&ldquo;{quote}&rdquo;</p>
                                <p className="card-text my-3" id="quoteAuthor">&mdash; {author}</p>
                            </div>
                        </div>
                    </div>

                    <div className="generateButton my-3 text-center">
                        <Link to="/quotes"><button className='btn btn-success rounded-2 shadow' onClick={handleClick}>Generate</button></Link>
                    </div>

                </div>

            </section>

            <Footer />

        </main >
    )

}

export default Quotes