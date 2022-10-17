import { useState } from "react"
import Link from "next/link"
import styles from './Navbar.module.scss'

const Navbar = () => {

    const [dropdown, setDropdown] = useState(false)

    return (
        <header className={styles.header}>
            <h1>BookStore</h1>
            <nav className={styles.navbar}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li 
                    className={styles.dropdownMenu}
                    onClick={()=> setDropdown(!dropdown)}>
                        <span>Categories</span>
                        <ul 
                        className={`dropdown ${dropdown ? styles.show : null}`}>
                            <li><Link href="/">Romance</Link></li>
                            <li><Link href="/">Ação</Link></li>
                            <li><Link href="/">Fantasia</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar