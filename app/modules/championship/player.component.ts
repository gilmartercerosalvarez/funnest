import {Component} from '@angular/core';
import {Player} from "./dto/Player";

@Component({
    selector: 'player',
    templateUrl: 'app/modules/championship/player.component.html',
    inputs: ['player'],
})

/**
 * Team component responsible to manage al data required to display a team
 */
export class PlayerComponent
{
    player:Player;
}
