import {Component} from '@angular/core';
import {VM} from'../Data/vm';
import {Server} from '../Data/server';
import {SelectedServer} from '../SelectedServer-service';
import {State} from '../Data/vm';
import {URLService} from'./SnapShotURL.service';

import {SnapShot} from '../Data/Snapshot';
@Component({
    selector: "vm-snapshot",
    templateUrl: "./app.SnapShotList.html",
	styleUrls: ['./Snapshot.css']
})
export class VMSnapShot{
    static last:VMSnapShot=null;
    selectedVM : VM[];
    selectedSS : SnapShot[];
    selectedSnapshot: any[];
    checkBox:boolean[];
    allCheck:boolean;
    constructor(public selected:SelectedServer ,public http:URLService){
        VMSnapShot.last = this;
        this.selectedVM = new Array<VM>();
        this.selectedSS = new Array<SnapShot>();
        this.checkBox = new Array<boolean>(256);
        this.allCheck=false;
        let i:number;
        for(i=0;i<this.checkBox.length;++i)
            this.checkBox[i]=false;
        let wait:boolean = false;
        if(selected.server.vmlist!=null)
            console.log(selected.server.vmlist.length);
        window.setTimeout(http.getInstanceList("http://164.125.70.18:50003",selected),3000);
        if(selected.server.vmlist!=null)
            console.log(selected.server.vmlist.length);
        
    }
    static reset(src:VMSnapShot){
        if(src== null)
            return;
        let i;
        src.allCheck=false;
        for(i=0;i<src.checkBox.length;++i)
            src.checkBox[i]=false;
        while(src.selectedVM.length!=0)
            src.selectedVM.pop();
    }
    allChecking(){
        let i;
        this.allCheck = !this.allCheck;
        for(i=0;i<this.checkBox.length;++i){
            this.checkBox[i]=this.allCheck;
            if(i<this.selected.server.vmlist.length)
                if(this.allCheck)
                    this.addSelectedVM(this.selected.server.vmlist[i],i);
                else
                    this.popSelectedVM(this.selectedVM,this.selected.server.vmlist[i]);
        }
    }
    NtoS(state: State){
        if(state==State.ON)
            return "ON";
        else if(state==State.OFF)
            return "OFF";
        else if(state==State.PAUSE)
            return "PAUSE";
    }
    cancle(list: VM[], select: VM){
        
    }

    createSnapShot(){
        if(this.selectedVM.length==0)
            alert("선택된 VM이 존재하지 않습니다");
        alert("api 이용하여 스냅삿 추가 할것");
    }
    addSelectedVM(select:VM, i:number){
        if(this.checkBox[i]){
            this.selectedVM.push(select);
            // 스냅샷 리스트 추가 
            for(let i=0;i<select.snapshots.length;++i)
                this.addSnapShot(select.snapshots[i]);
        }
        else{
            this.popSelectedVM(this.selectedVM, select);
        }
    }
    addSnapShot(select: SnapShot){
        console.log(SnapShot.name);
        // 선택된 Snapshot이 이미 등록되어있는지 확인 후 삭제 목록에 추가
        if(!this.selectedSS.find(ss=>ss.name ===select.name)){
            this.selectedSS.push(select);
        }
        else{
            this.popSnapShot(this.selectedSS, select);
        }
    }
    popSelectedVM(list: VM[], select: VM){
        console.log(select.name);
        let idx = list.findIndex(vm=>vm.name === select.name)
        let last = list.length;
        list[idx]=list[last-1];
        list.pop();
    }

    // 선택된 스냅샷들 삭제
    popSnapShot(list: SnapShot[], select: SnapShot){
        let idx = list.findIndex(vm=>vm.name ===select.name)
        let last = list.length;
        list[idx]=list[last-1];
        list.pop();
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
        this.selectedSS.forEach(element => {
            this.deleteSnapShot(element);
        });
        while(this.selectedVM.length!=0)
            this.selectedVM.pop();
    }
    deleteSnapShot(snapshot:SnapShot){
        this.http.deleteSnapshot("http://164.125.70.18:50003",snapshot.id);
    }
}