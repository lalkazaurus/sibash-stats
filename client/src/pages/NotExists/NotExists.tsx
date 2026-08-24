import { useNavigate } from "react-router-dom"
import styles from "./NotExists.module.scss"

export default function NotExists() {
    const navigate = useNavigate()

    return <div className={`container`}>
        <div className={styles.errorBlock}>
            <h3>404 — Page Not Found</h3>
            <p>This page doesn't exist on our platform.</p>
            <p>Let's get you back to the main page.</p>
            <button onClick={() => navigate("/")}>Go to Homepage</button>
        </div>
    </div>
}