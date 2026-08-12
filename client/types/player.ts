import { Country } from "./enums";
import type { Stats } from "./stats";

export type Player = {
    id: number;
    nick: string;
    firstname: string;
    surname: string;
    country: Country;
    dateOfBirth: string;
    teamId: number;
    photo: string;
    trophyIds: number[];
    stats: Stats
}