import {Injectable} from '@angular/core';
import { servers } from './mock-server';
import { IDataList } from './IDataList';
import { Server } from './Server';
// 임시 데이터 가져오기
@Injectable()
export class ServerList {
	public _servers : Server[] = servers;
    constructor(){}
    
}