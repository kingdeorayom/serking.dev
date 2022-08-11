import Footer from './components/Footer'
import BackButton from './components/BackButton'
import Saliksik from '../assets/images/apps/saliksikuphsl.png'
// import AccountManager from '../assets/images/apps/account-manager.png'


const Apps = () => {

    const style = {
        width: "30rem",
    }
    return (
        <main id='apps'>

            <BackButton />

            <section id="intro">
                <h1 id="pageTitle">Apps</h1>
                <h2 id="pageSubtitle">Personal apps &amp; works</h2>
            </section>

            <section className='my-5'>
                <div className="row text-dark">
                    <div className="col-sm-12 col-md-6 mb-4 d-flex justify-content-center">
                        <div className="card border-0 shadow-lg bg-body" style={style}>
                            <img src={Saliksik} className="card-img-top" alt="Project image preview" />
                            <div className="card-body">
                                <h5>SALIKSIK: UPHSL Research Repository</h5>
                                <p className="card-text">The Official Institutional Repository of University of Perpetual Help System Laguna</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 mb-4 d-flex justify-content-center">
                        <div className="card border-0 shadow-lg bg-body" style={style}>
                            <img src={Saliksik} className="card-img-top" alt="Project image preview" />
                            <div className="card-body">
                                <h5>Account Manager</h5>
                                <p className="card-text">Store and manage your accounts all in one place</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />

        </main >)
}

export default Apps
