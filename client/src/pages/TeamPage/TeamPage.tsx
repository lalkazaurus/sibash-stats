import { useParams } from "react-router-dom"
import ErrorMessage from "../../layouts/ErrorMessage/ErrorMessage"
import { MOCK_TEAMS, MOCK_TROPHIES } from "../../data"
import styles from "./TeamPage.module.scss"
import PlayerCard from "./elements/PlayerCard/PlayerCard"

export default function TeamPage() {
    const { id } = useParams()

    if (!id) return <ErrorMessage message={"Такої тіми нема"}/>

    const team = MOCK_TEAMS.find(t => t.id === +id)

    if (!team) return <ErrorMessage message={"Такої тіми нема"}/>

    const trophiesOfTeam = MOCK_TROPHIES.filter((trophy) => (trophy.teamId === +id))

    return <div className="container">
        <div className={styles.teamBlock}>
            <h2>{team.name}</h2>
            <img 
                className={styles.logo} 
                src={team.logo} 
                alt={team.name}
            />
            <p className={styles.country}>{team.country}</p>
            <div className={styles.playersBlock}>
                {team.players.map(player => (
                    <PlayerCard 
                        id={player.id}
                        nick={player.nick}
                        firstname={player.firstname}
                        surname={player.surname}
                        photo={player.photo}
                        key={player.id}
                    />
                ))}
            </div>
            <hr className={styles.line}/>
            <h3>Notable trophies</h3>
            {trophiesOfTeam && trophiesOfTeam.length > 0 ? (
                <div className={styles.trophiesContainer}>
                    {trophiesOfTeam.map(trophy => (
                        <div className={styles.trophy} key={trophy.id}>
                            <img src={trophy.image} alt={trophy.name} />
                            <p>{trophy.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>There is no trophies of this team</p>
            )}
        </div>
    </div>
}