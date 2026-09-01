import { useParams } from "react-router-dom"
import styles from "./PlayerPage.module.scss"
import { MOCK_PLAYERS, MOCK_TEAMS } from "../../data";
import ErrorMessage from "../../layouts/ErrorMessage/ErrorMessage";
import { differenceInYears } from "date-fns";

export default function PlayerPage() {
    const { id } = useParams();

    if (!id) return <ErrorMessage message={"Такого гравця нема"}/>

    const player = MOCK_PLAYERS.find(p => p.id === +id)

    if (!player) return <div><h2>Гравця з таким id не знайдено</h2></div>

    return (
        <div className="container">
            <div className={styles.playerBlock}>
                <h2>{`${player.firstname} '${player.nick}' ${player.surname}`}</h2>
                <img src={player.photo} alt={player.nick} className={styles.photo}/>
                <p className={styles.country}>{player.country}</p>
                <p>Age: {differenceInYears(new Date(), new Date(player.dateOfBirth))}</p>
                <span>
                    <img 
                        src={MOCK_TEAMS.find(team => team.id === player.teamId)?.logo} 
                        alt={MOCK_TEAMS.find(team => team.id === player.teamId)?.name}
                        className={styles.logo}
                    />
                </span>
            </div>
        </div>
    )
}