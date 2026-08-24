import styles from "./MainPage.module.scss"

export default function MainPage() {
    return <div className="container">
        <div className={styles.titleBlock}>
            <h1>Every Match. Every Stat. Every Team.</h1>
            <p>Real-time CS2 rankings, player stats, and team performance - all in one place.</p>
            <p>Wanna check info?</p>
            <button>Teams ranking</button>
        </div>
    </div>
}