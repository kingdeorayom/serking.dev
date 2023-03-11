import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {

    return (
        <>
            <Navbar />
            <section>{children}</section>
            <Footer />
        </>
    )

}

export default Layout