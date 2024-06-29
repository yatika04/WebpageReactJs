import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
//outlet for the same page data 


function Layout() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        
        
        </>


    )
}
export default Layout