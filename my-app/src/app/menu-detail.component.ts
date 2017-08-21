import { Component, Input } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'menu-detail',
  template: `
	<div style="background: gray" *ngIf="menu">
		<div><label>홈 > </label>{{menu.name}}<label> > </label>{{menu.subMenu[0]}}</div>
	</div>
  `
})

export class MenuDetailComponent {
	@Input() menu: Menu;
}