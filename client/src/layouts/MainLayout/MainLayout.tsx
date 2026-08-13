import { Outlet } from "react-router-dom"
import styles from "./MainLayout.module.scss"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { ErrorBoundary } from "react-error-boundary"
import FallBack from "../FallBack/FallBack"

export default function MainLayout() {
    return <div className={styles.wrapper}>
        <Header/>
        <main className={styles.content}>
            <ErrorBoundary FallbackComponent={FallBack}>
                <Outlet/>
            </ErrorBoundary>
        </main>
        <Footer/>
    </div>
}