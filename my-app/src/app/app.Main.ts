import { Component } from '@angular/core';
import {Farm} from './data/Farm';
import {ServerList} from './data/server-mock.service';
import {FarmList} from './data/farm-mock.service';
import { HDaasVMListService} from './data/vm-mock.service';
import { OpenStackVMListService} from './data/vm-mock.service';
import { SelectedServer } from './SelectedServer-service';

@Component({
  selector: 'main',
  templateUrl:'./app.main.html',
  styleUrls: ['./app.component.css'],
  providers: [ ServerList,FarmList,HDaasVMListService,OpenStackVMListService,SelectedServer]
})

export class Main { 
  constructor(private farmList:FarmList,private serverService:ServerList,public HDaaS:HDaasVMListService,public OpenStack:OpenStackVMListService){
    //let farm: Farm[] = farmList._farm;
    
	//console.log(farmList._farm[0].servers.length);
  }
}