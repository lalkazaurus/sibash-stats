import { Outlet } from "react-router-dom"
import styles from "./MainLayout.module.scss"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function MainLayout() {
    return <div className={styles.wrapper}>
        <Header/>
        <main className={styles.content}>
            <Outlet/>
        </main>
        <Footer/>
    </div>
}