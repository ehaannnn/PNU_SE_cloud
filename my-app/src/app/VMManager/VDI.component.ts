import {Component} from '@angular/core';
import {VM} from'../Data/vm';
import {Server} from '../Data/server';
import {SelectedServer} from '../SelectedServer-service';
import {State} from '../Data/vm';


@Component({
    selector: 'VDI',
    templateUrl:'./VDI.component.html',
	styleUrls: ['./VDI.component.css']
})

export class VDIComponent{
	
    selectedVM : VM[];
    selectedSnapshot: any[];
    constructor(public selected:SelectedServer){
        this.selectedVM = new Array<VM>();
    }
    
}