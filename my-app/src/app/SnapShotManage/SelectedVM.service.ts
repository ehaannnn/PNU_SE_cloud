import {Injectable} from '@angular/core';
import {Server} from'../data/server';
// 임시 데이터 가져오기
@Injectable()
export class SelectedServerList {
    server:Server;
    constructor(){}
}