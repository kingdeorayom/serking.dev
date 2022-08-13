import Footer from './components/Footer'
import BackButton from './components/BackButton'

const Notes = () => {

    return (
        <main id='notes'>

            <BackButton />

            <section id="intro">
                <h1 className="pageTitle">Notes</h1>
                <h2 className="pageSubtitle">Words and random thoughts.</h2>
                <hr className='horizontalLine' />
            </section>

            <section className='my-5'>
                <div className="row text-dark">
                    <div className="col-sm-12 col-md-6 mb-4 d-flex justify-content-center">
                        <div className="card card-note">
                            <div className="card-body">
                                <div className="text-center my-3">
                                    <img src="../../images/emojis/cool.png" className='img-fluid' width={150} alt="" />
                                </div>
                                <h5 className="card-title">Note title</h5>
                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus dolores ipsa beatae repellendus quas nemo officiis odit optio id soluta error.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-4 d-flex justify-content-center">
                        <div className="card card-note">
                            <div className="card-body">
                                <div className="text-center my-3">
                                    <img src="../../images/emojis/upside-down-face.png" className='img-fluid' width={150} alt="" />
                                </div>
                                <h5 className="card-title">Note title</h5>
                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus dolores ipsa beatae repellendus quas nemo officiis odit optio id soluta error.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </main >
    );
}

export default Notes
