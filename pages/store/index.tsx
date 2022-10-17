import { NextPage } from "next";
import Link from "next/link";
import styles from '../../styles/Store.module.scss';

const Store: NextPage = () => {
    return (
    <div className={styles.container}>
        <h1>Store</h1>
        <Link href="/product/1">Product 1</Link>
        <Link href="/product/2">Product 2</Link>
        <Link href="/product/3">Product 3</Link>
        <Link href="/product/4">Product 4</Link>
    </div>
    )
}

export default Store;