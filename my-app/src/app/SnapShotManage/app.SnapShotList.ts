import {Component} from '@angular/core';
import {VM} from'../Data/vm';
import {Server} from '../Data/server';
import {SelectedServer} from '../SelectedServer-service';
import {State} from '../Data/vm';
@Component({
    selector: "vm-snapshot",
    templateUrl: "./app.SnapShotList.html",
	styleUrls: ['./Snapshot.css']
})
export class VMSnapShot{
    selectedVM : VM[];
    selectedSnapshot: any[];
    constructor(public selected:SelectedServer){
        this.selectedVM = new Array<VM>();
    }
    NtoS(state: State){
        if(state==State.ON)
            return "ON";
        else if(state==State.OFF)
            return "OFF";
        else if(state==State.PAUSE)
            return "PAUSE";
    }
    deleteSelectedVM(list: VM[], select: VM){
        let idx = list.findIndex(vm=>vm.name ===select.name)
        let last = list.length;
        list[idx]=list[last-1];
        list.pop();
    }
    // 선택된 스냅샷들 삭제
    deleteSnapShot(list: VM[], select: VM){
        let idx = list.findIndex(vm=>vm.name ===select.name)
        let last = list.length;
        list[idx]=list[last-1];
        list.pop();
    }
    createSnapShot(){
        if(this.selectedVM.length==0)
            alert("선택된 VM이 존재하지 않습니다");
        alert("api 이용하여 스냅삿 추가 할것");
    }
    addSelectedVM(select: VM){
        if(!this.selectedVM.find(vm=>vm.name ===select.name)){
            this.selectedVM.push(select);
            // 스냅샷 리스트 추가 
            //addSnapShot()
        }
        else{
            this.deleteSelectedVM(this.selectedVM, select);
        }
    }
    addSnapShot(select: VM){
        // 선택된 Snapshot이 이미 등록되어있는지 확인 후 삭제 목록에 추가
        if(!this.selectedVM.find(vm=>vm.name ===select.name)){
            this.selectedVM.push(select);
        }
        else{
            this.deleteSnapShot(this.selectedVM, select);
        }
    }
    deleteConfirm(){
        if(this.selectedVM.length==0)
            alert("선택된 스냅샷이 존재하지 않습니다");
        else{
            if(confirm("스냅샷들을 삭제하시겠습니까?")==true){
                this.deleteSnapShots();
            }
        }
    }
    deleteSnapShots(){
        this.selectedVM.forEach(element => {
            this.deleteSnapShot(this.selected.server.vmlist,element);
        });
        while(this.selectedVM.length!=0)
            this.selectedVM.pop();

    }
}