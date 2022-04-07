import * as React from "react"
import Footer from "./Footer"
import "../styles/global.css"
import Navbar from "./Navbar"

export default function Layout({children}) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}