export class User{
    id : string;
    name : string;
    state : string;
    personalVM : string[];
    isDeleted:boolean=false;
    constructor(id:string,name:string, state:string,personalVM:string[],isDeleted:boolean=false){
        this.id=id;
        this.name=name;
        this.state=state;
        this.personalVM=personalVM;
    }
}
