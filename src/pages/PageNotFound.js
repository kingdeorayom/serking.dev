import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <main id='wrapper'>

            <section id='pageNotFound'>
                <h1 className="page__title">Oops. There's nothing here.</h1>
                <h2 className="page__content">I'm sorry, but you need to go back to the homepage.</h2>
                <div className="my-4">
                    <Link to="/" className='page__not__found__link'>Go back to homepage</Link>
                </div>
            </section>

        </main >
    )
}

export default PageNotFound