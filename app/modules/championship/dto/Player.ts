/**
 * Player object
 */
export class Player
{
    id:number;
    firstName:string;
    lastName:string;
    documentId:number;
    age:number;
    address:string;
    telephone:number;
    position: string;
    description:string;
    urlPhoto:string;

    /**
     * Constructor for player object
     *
     * @param id
     * @param firstName
     * @param lastName
     */
    public constructor(id:number, firstName:string, lastName:string)
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
