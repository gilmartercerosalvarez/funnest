import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Championship} from "./dto/Championship";
import {Group} from "./dto/Group";

@Component({
    selector: 'championship',
    templateUrl: 'app/modules/championship/championship.component.html'
})

export class ChampionshipComponent
{
    size:number = 0;
    championships:Championship[] = [
        new Championship(45, 'ChampionShip 1', 'Responsible 1'),
        new Championship(5, 'ChampionShip 2', 'Responsible 2'),
        new Championship(89, 'ChampionShip 3', 'Responsible 3'),
        new Championship(15, 'ChampionShip 4', 'Responsible 4'),
        this.getChamp(),
        new Championship(51, 'ChampionShip 5', 'Responsible 5'),
        new Championship(3, 'ChampionShip 6', 'Responsible 6'),
    ];

    /**
     * Initialization/deceleration before the constructor it's where/when components' bindings are resolved
     */
    public ngOnInit()
    {
        // (+) converts string 'id' to a number
        let id = +this.route.snapshot.params['id'];
        //this.service.getHero(id).then(hero => this.hero = hero);
    }

    /**
     * Ensures proper initialization of fields in the class and its subclasses
     *
     * @param route
     * @param router
     */
    public constructor(private route: ActivatedRoute, private router: Router)
    {

    }

    /**
     * Redirect to groups component.
     */
    public redirectToGroups(id:number)
    {
        this.router.navigate(['/group', id]);
    }

    public getChamp()
    {
        var champ1 = new Championship(6, 'Many description', 'Gilmar Terceros');
        champ1.setGroups(this.getGroups());
        
        return champ1;
    }

    public getGroups()
    {
        var honores = new Group(1, 'Honores');
        var ascenso = new Group(2, 'Ascenso');
        var infantes = new Group(3, 'infantes');
        var groups:Group[] = [];
        groups.push(honores);
        groups.push(ascenso);
        groups.push(infantes);

        return groups;
    }
}
