import {Player} from "./Player";

/**
 * Manage all data required to
 */
export class Team
{
    id:number;
    name:string;
    gamesPlayed:number;
    gamesWon:number;
    gamesTied:number;
    gamesLost:number;
    goolsFavor:number;
    goolsAgainst:number;
    goolsDifference:number;
    totalPoints:number;
    description:string;

    /**
     * Team constructor
     *
     * @param id
     * @param name
     */
    public constructor(id:number, name:string)
    {
        this.id = id;
        this.name = name;
    }
}
