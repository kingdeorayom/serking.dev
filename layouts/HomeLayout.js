import Footer from '../components/Footer'

const HomeLayout = ({ children }) => {

    return (
        <>
            {children}
            <Footer />
        </>
    )

}

export default HomeLayout