import {Component} from '@angular/core';
import {Compute_Instance} from './Compute_Instance';

import {VM, State} from '../Data/Vm';
import {SelectedServer} from '../SelectedServer-service';

@Component({
    selector: "VM-manage",
    templateUrl: "./app.VMManageRight.html",
	styleUrls: ['./app.component.css']
})
export class VMManageRight{
    private vm_list : Array<VM>;

    constructor(private selectedServer : SelectedServer, private ci_server : Compute_Instance,private ci_flavor : Compute_Instance, private HDaaS_VMList: Compute_Instance) {
        //VMManageRight.vm_list = new Array<VM>();
             
        
    }
  
}