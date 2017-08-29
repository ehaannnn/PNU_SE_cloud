import { Component } from '@angular/core';
import {Farm} from '../data/Farm';
import {ServerList} from '../data/server-mock.service';
import {FarmList} from '../data/farm-mock.service';
import { HDaasVMListService} from '../data/vm-mock.service';
import { OpenStackVMListService} from '../data/vm-mock.service';
import { SelectedServer } from '../SelectedServer-service';
import { VMSnapShot } from './app.SnapShotList';
@Component({
  selector: 'snap-main',
  templateUrl:'./SnapShotMain.html',
  styleUrls: ['./Snapshot.css'],
  providers: [  ServerList,FarmList,HDaasVMListService,OpenStackVMListService,SelectedServer,VMSnapShot]
})

export class SnapShotMain { 
  constructor(private farmList:FarmList,private serverService:ServerList,public HDaaS:HDaasVMListService,public OpenStack:OpenStackVMListService){
  }
}