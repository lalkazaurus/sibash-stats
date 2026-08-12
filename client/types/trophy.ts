import type { Team } from "./team";

export type Trophy = {
    id: number;
    name: string;
    image: string;
    team: Team;
    tournamentId: number;
    teamId: number;
    winnerIds: number[];
}