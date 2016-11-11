import {Component} from '@angular/core';
import {Player} from "./dto/Player";

@Component({
    selector: 'team',
    templateUrl: 'app/modules/championship/team.component.html',
})

/**
 * Team component responsible to manage al data required to display a team
 */
export class TeamComponent
{
    players = [
        {id:1, firstName:'Gilmar', lastName:'Terceros Alvarez', documentId:1283566, age:31, address:'Tolata Calle rosales', telephone:4522316, position:'Delantero', description:'Decription Gilmar', urlPhoto:''},
        {id:1, firstName:'Elmer', lastName:'Colque pinto', documentId:79883566, age:31, address:'Uscureña', telephone:4522316, position:'Defensa', description:'Decription Gilmar', urlPhoto:'app/modules/assets/images/players/player2.jpg'},
        {id:1, firstName:'kevin', lastName:'Arispe', documentId:893566, age:31, address:'Cliza', telephone:4522316, position:'Delantero', description:'Decription Kevin', urlPhoto:''},
        {id:1, firstName:'Ronaldo', lastName:'Canqui', documentId:782183566, age:31, address:'España', telephone:4522316, position:'Arquero', description:'Decription Ronaldo', urlPhoto:'app/modules/assets/images/players/player1.jpg'},
    ];
    playerDisplayed:Player = this.players[0];

    /**
     * Set the player to bve displayed on UI
     *
     * @param player
     */
    public setPlayer(player:Player)
    {
        this.playerDisplayed = player;
        console.log(player);
    }
}
