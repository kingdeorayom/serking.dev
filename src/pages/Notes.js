import Footer from './components/Footer'
import BackButton from './components/BackButton'


const Notes = () => {
    return (
        <main id='notes'>

            <BackButton />

            <section id="intro">
                <h1 id="pageTitle">Notes</h1>
                <h2 id="pageSubtitle">Words and random thoughts</h2>
            </section>

            <section className='my-5'>
                <div className="row text-dark">
                    <div className="col-sm-12 col-md-6 mb-4 d-flex justify-content-center">
                        <div class="card">
                            <div class="card-body">
                                <div className="text-center my-3">
                                    <img src="../../images/emojis/cool.png" className='img-fluid' width={150} alt="" />
                                </div>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-4 d-flex justify-content-center">
                        <div class="card">
                            <div class="card-body">
                                <div className="text-center my-3">
                                    <img src="../../images/emojis/upside-down-face.png" className='img-fluid' width={150} alt="" />
                                </div>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-4 d-flex justify-content-center">
                        <div class="card">
                            <div class="card-body">
                                <div className="text-center my-3">
                                    <img src="../../images/emojis/in-love.png" className='img-fluid' width={150} alt="" />
                                </div>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-4 d-flex justify-content-center">
                        <div class="card">
                            <div class="card-body">
                                <div className="text-center my-3">
                                    <img src="../../images/emojis/high-five.png" className='img-fluid' width={150} alt="" />
                                </div>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
