import { Component, Input } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'menu-detail',
  template: `
	<div style="background: gray" *ngIf="menu">
		<div><label>홈 > </label>{{menu.name}}</div>
	</div>
  `
  
 
})

export class MenuDetailComponent {
	@Input() menu: Menu;
}