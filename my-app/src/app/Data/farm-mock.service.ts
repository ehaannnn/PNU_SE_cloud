import {Injectable} from '@angular/core';
import {farm} from './mock-farm';
import {Farm} from './Farm'

@Injectable()
export class FarmList {
	public _farm : Farm[];
    constructor(){
		this._farm = farm;
	};
}
