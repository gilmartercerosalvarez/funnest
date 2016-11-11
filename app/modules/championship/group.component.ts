import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Group} from "./dto/Group";

@Component({
    selector: 'league',
    templateUrl: 'app/modules/championship/group.component.html'
})

/**
 * Manage all groups that has a championship.
 */
export class GroupComponent
{
    group:Group[] = [
        new Group(1, 'Honores'),
        new Group(2, 'Acenso'),
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

    public redirectToTeam(id:number)
    {
        this.router.navigate(['/team', id]);
    }

    /**
     * Mock to return all team on group
     */
    public getTeams()
    {
        return [
            {id:1, name:'Funnest', PJ:10, PG:45, PE:45, PP:4, GF:5, GC:74, DI:1, PT:14, description:'Description'},
            {id:2, name:'Barcelona', PJ:9, PG:5, PE:1, PP:9, GF:5, GC:8, DI:1, PT:13, description:'Description'},
            {id:3, name:'Real Madrid', PJ:7, PG:5, PE:3, PP:12, GF:5, GC:74, DI:1, PT:12, description:'Description'},
            {id:4, name:'Manchester', PJ:5, PG:5, PE:4, PP:2, GF:1, GC:0, DI:1, PT:11, description:'Description'},
            {id:5, name:'La loca bicicleta FC', PJ:2, PG:14, PE:11, PP:9, GF:8, GC:4, DI:8, PT:10, description:'Description'},
            {id:6, name:'Bolivia', PJ:1, PG:12, PE:10, PP:78, GF:5, GC:7, DI:7, PT:9, description:'Description'},
        ];
    }
}
