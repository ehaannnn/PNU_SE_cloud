import {VM} from './Vm';
export class Server{
    name: String;
    vmlist: VM[];
    constructor(name: String, vmlist: VM[]){
        this.name=name;
        this.vmlist=vmlist;
    }
}