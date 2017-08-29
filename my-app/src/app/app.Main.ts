import { Component } from '@angular/core';
import {Farm} from './data/Farm';
import {ServerList} from './data/server-mock.service';
import {FarmList} from './data/farm-mock.service';
import { HDaasVMListService} from './data/vm-mock.service';
import { OpenStackVMListService} from './data/vm-mock.service';
import { SelectedServer } from './SelectedServer-service';

import { Menu } from './menu';


const MENUS: Menu[] = [
	{name: '서버관리', subMenu: ['기본관리','세부관리'], subMenuLink: ['/vm_manage/Farm','/vm_manage_detail']},
	{name: '통계/분석', subMenu: [], subMenuLink: ['','']},
	{name: '백업/복구', subMenu: ['스냅샷 관리','스냅샷 예약 관리'], subMenuLink: ['/vm_snapshot/manage']},
	{name: '사용자 관리', subMenu: [], subMenuLink: ['','']},
];


@Component({
  selector: 'main',
  templateUrl:'./app.main.html',
  styleUrls: ['./app.component.css'],
  providers: [ ServerList,FarmList,HDaasVMListService,OpenStackVMListService,SelectedServer]
})

export class Main { 
  constructor(){
  }
  
  menus = MENUS;
  selectedMenu: Menu = MENUS[0];
  //subMenuIndex: number;
  
  onClick(menu : Menu): void {
	  this.selectedMenu = menu;
	  //this.subMenuindex = ;
  }
  
}