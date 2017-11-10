export class User{
    public id : string;
    public name : string;
    public state : string;
    public personalVM : string[];
    public pw : string;
    public email:string="";
    public isDeleted:boolean;

    constructor(id?:string,name?:string, state?:string,personalVM?:string[]){
        this.id=id || "";
        this.name=name || "";
        this.state=state || "";
        this.personalVM=personalVM || null;
        this.email="";
        this.isDeleted=false;        
    }

}
