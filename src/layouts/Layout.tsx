
import { Outlet } from "react-router"
import Footer from "./Footer"
import Header from "./Header"

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />   {/* This loads child pages */}
            </main>
            <Footer />
        </>
    )
}

export default Layout
