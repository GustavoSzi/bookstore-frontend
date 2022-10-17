import React from "react";
import Footer from "../footer";
import Navbar from "../navbar";

import styles from './Layout.module.css'

const Layout = ({children}: React.PropsWithChildren) => {
    return (
        <>
            <Navbar />
            <main className={styles.mainContainer}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;