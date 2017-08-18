import {Injectable} from '@angular/core';
import {openStackVMList,hDaaSVMList} from './mock-vm';
import {IDataList} from './IDataList';
import {VM} from './Vm';
// 임시 데이터 가져오기
@Injectable()
export class OpenStackVMListService {
	public _openStackVMList : VM[] = openStackVMList;
    constructor(){}
}

@Injectable()
export class HDaasVMListService {
	public _hDaaSVMList : VM[] = hDaaSVMList;
    constructor(){}
}