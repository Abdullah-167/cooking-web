import React from 'react'
import TopNavbar from './TopNavbar'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <TopNavbar />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout