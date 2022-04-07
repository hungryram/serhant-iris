import * as React from "react"
import Footer from "./Footer"
import "../styles/global.css"
import Navbar from "./Navbar"
import Helmet from "react-helmet"

export default function Layout({ children }) {
    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet" />
            </Helmet>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}