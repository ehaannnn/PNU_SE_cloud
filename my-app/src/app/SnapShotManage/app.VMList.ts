import {Component,OnInit,Injectable} from '@angular/core';
import {VM} from '../Data/Vm';
import {Server} from '../Data/server';
import {Farm} from '../Data/farm';
import {ServerList} from '../Data/server-mock.service';
import {FarmList} from '../Data/farm-mock.service';
import {SelectedServer} from '../SelectedServer-service';
import { HDaasVMListService} from '../data/vm-mock.service';
import { OpenStackVMListService} from '../data/vm-mock.service';
@Component({
    selector: 'vm-list',
    templateUrl:'./app.VMList.html',
	styleUrls: ['../app.component.css']
})

export class VMListView{
    ViewOfServer : boolean;
    farms: Farm[];
    constructor(public farmList:FarmList, public serverService:ServerList,public selected:SelectedServer,public HDaaS:HDaasVMListService,public OpenStack:OpenStackVMListService){
		console.log("VMListView Const");		
        this.farms = farmList._farm;
        this.ViewOfServer = true;
		this.farms[0].servers = serverService._servers;
		this.farms[0].servers[0].vmlist=OpenStack._openStackVMList;
		this.farms[0].servers[1].vmlist=HDaaS._hDaaSVMList;
		//console.log(this.farms[0].servers.length);
		//console.log(this.farms[0].servers[0].name);
        selected.server=this.farms[0].servers[0];
    }
    selectServer(select: Server){
        this.selected.server=select;
    }
    toggleServer(active: boolean){
        this.ViewOfServer = !active;
    }
} 