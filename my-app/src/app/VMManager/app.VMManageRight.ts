import {Component} from '@angular/core';
import {Compute_Instance} from './Compute_Instance';

@Component({
    selector: "VM-manage",
    templateUrl: "./app.VMManageRight.html",
	styleUrls: ['./app.component.css']
})
export class VMManageRight{
    
    constructor(private ci : Compute_Instance) {
        ci._promise().then(function(text) {
            console.log(text);
        }, function(error) {
            console.log(error);
        });
    }
  
}