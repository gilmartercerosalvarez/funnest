import {Group} from "./Group";

/**
 * Responsible to manage information about Championship
 */
export class Championship
{
    private id:number;
    private name:string;
    private groups:Group[];
    private responsible:string;
    private status:string;
    private description:string;

    /**
     * Define the attributes for Championship object
     *
     * @param {number} id
     * @param {string} name
     * @param {string} responsible
     */
    public constructor(id:number, name:string, responsible:string)
    {
        this.id = id;
        this.name = name;
        this.responsible = responsible;
    }

    /**
     * Return the groups for championship
     *
     * @returns {Group[]}
     */
    public getGroups()
    {
        return this.groups;
    }

    /**
     * Set the groups in on championship object
     *
     * @param groups
     */
    public setGroups(groups:Group[])
    {
        this.groups = groups;
    }

    /**
     * Return de description for championship
     *
     * @returns {string}
     */
    public getDescription()
    {
        return this.description;
    }

    /**
     * Return the description for championship
     *
     * @param description
     */
    public setDescription(description:string)
    {
        this.description = description;
    }
}
