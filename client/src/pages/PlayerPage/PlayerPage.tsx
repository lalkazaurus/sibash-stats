import { useParams } from "react-router-dom"
import styles from "./PlayerPage.module.scss"
import { MOCK_PLAYERS } from "../../data";
import ErrorMessage from "../../layouts/ErrorMessage/ErrorMessage";

export default function PlayerPage() {
    const { id } = useParams();

    if (!id) return <ErrorMessage message={"Такого гравця нема"}/>

    const player = MOCK_PLAYERS.find(p => p.id === +id)

    if (!player) return <div><h2>Гравця з таким id не знайдено</h2></div>

    return (
        <div className={styles.container}>
            <h1>{player.nick}</h1>
        </div>
    )
}