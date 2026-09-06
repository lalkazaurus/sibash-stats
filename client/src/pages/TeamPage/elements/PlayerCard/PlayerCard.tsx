import { useNavigate } from "react-router-dom"
import styles from "./PlayerCard.module.scss"

interface PlayerCardProps {
    firstname: string,
    surname: string,
    nick: string,
    photo: string,
    id: number
}

export default function PlayerCard({ id, surname, nick, photo, firstname }: PlayerCardProps) {
    const navigate = useNavigate()

    return <div onClick={() => navigate(`/player/${id}`)} className={styles.playerBlock}>
        <img src={photo} alt={nick}/>
        <p>{`${firstname} '${nick}' ${surname}`}</p>
    </div>
}