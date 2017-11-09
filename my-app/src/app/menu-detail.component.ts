import { Component, Input } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'menu-detail',
  template: `
	<div style="background: gray" *ngIf="menu">
		<div style="padding:5px 0px 5px 16px; font-size:20px;"><label>홈 > </label>{{menu.name}}<label> > </label>{{menu.subMenu[menu.selectedIDX]}}</div>
	</div>
  `
})

export class MenuDetailComponent {
	@Input() menu: Menu;
	//@Input() index: number;
}