import {Component,OnInit,Injectable} from '@angular/core';
import {VM} from '../Data/Vm';
import {Server} from '../Data/server';
import {Farm} from '../Data/farm';
import {ServerList} from '../Data/server-mock.service';
import {FarmList} from '../Data/farm-mock.service';
import {SelectedServer} from '../SelectedServer-service';
import { HDaasVMListService} from '../data/vm-mock.service';
import { OpenStackVMListService} from '../data/vm-mock.service';
import { VMSnapShot } from './app.SnapShotList';
@Component({
    selector: 'vm-list',
    templateUrl:'./app.VMList.html',
	styleUrls: ['./Snapshot.css']
})

export class VMListView{
    ViewOfServer : boolean;
    farms: Farm[];
    constructor(public farmList:FarmList, public serverService:ServerList,public selected:SelectedServer,public HDaaS:HDaasVMListService,public OpenStack:OpenStackVMListService){
        this.farms = farmList._farm;
        this.ViewOfServer = true;
		this.farms[0].servers = serverService._servers;
		this.farms[0].servers[0].vmlist=OpenStack._openStackVMList;
		this.farms[0].servers[1].vmlist=HDaaS._hDaaSVMList;
        selected.server=this.farms[0].servers[0];
    }
    selectServer(select: Server){
        VMSnapShot.reset(VMSnapShot.last);   
        this.selected.server=select;
    }
    toggleServer(active: boolean){
        this.ViewOfServer = !active;
    }
} 