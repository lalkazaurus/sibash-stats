import type { Player } from "./player";
import type { Team } from "./team";
import type { Trophy } from "./trophy";

export type Tournament = {
    id: number;
    title: string;   
    prizepool: number;
    mvp?: Player; 
    winner?: Team;    
    teams: Team[];
    trophy: Trophy;      
};