import { useNavigate } from "react-router-dom"
import { MOCK_TEAMS } from "../../data"
import styles from "./RankingPage.module.scss"

export default function RankingPage() {
    const navigate = useNavigate()

    return <div className="container">
        <div className={styles.teamBlock}>
            <h2>Sibash Ranking</h2>
            <ol>
                {MOCK_TEAMS.map(team => (
                    <li key={team.id} onClick={() => navigate(`/team/${team.id}`)}>
                        <div className={styles.teamCard}>
                            <img src={team.logo} alt={team.name} />
                            <p>{team.name}</p>
                            <p>{team.country}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    </div>
}