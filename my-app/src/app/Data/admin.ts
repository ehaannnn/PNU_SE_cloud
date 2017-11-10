import { User } from './user';

export class Admin{
    public id : string;
    public pw : string;
    public users:User[];
    constructor(){
        this.users=new Array<User>();
    }
}