import { useParams } from "react-router-dom"
import ErrorMessage from "../../layouts/ErrorMessage/ErrorMessage"
import { MOCK_TEAMS } from "../../data"

export default function TeamPage() {
    const { id } = useParams()

    if (!id) return <ErrorMessage message={"Такої тіми нема"}/>

    const team = MOCK_TEAMS.find(t => t.id === +id)

    if (!team) return <ErrorMessage message={"Такої тіми нема"}/>

    return <div>
        <h1>{team?.name}</h1>
    </div>
}