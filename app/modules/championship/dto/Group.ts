import {Team} from "./Team";

/**
 * Object group responsible to encapsulate all information for group
 */
export class Group
{
    id:number;
    name:string;
    teams:Team[] = [];
    description:string;

    /**
     * Responsible to define the object attributes
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
