import { Country } from "./enums";
import type { Player } from "./player";

export type Team = {
    id: number;
    name: string;
    logo: string;
    players: Player[];
    trophies: number[];
    country: Country
}