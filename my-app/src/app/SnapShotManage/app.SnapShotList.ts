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
    static last:VMSnapShot=null;
    selectedVM : VM[];
    selectedSnapshot: any[];
    checkBox:boolean[];
    allCheck:boolean;
    constructor(public selected:SelectedServer){
        VMSnapShot.last = this;
        this.selectedVM = new Array<VM>();
        this.checkBox = new Array<boolean>(256);
        this.allCheck=false;
        let i:number;
        for(i=0;i<this.checkBox.length;++i)
            this.checkBox[i]=false;
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
                    this.deleteSelectedVM(this.selectedVM,this.selected.server.vmlist[i]);
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
    deleteSelectedVM(list: VM[], select: VM){
        console.log(select.name);
        let idx = list.findIndex(vm=>vm.name === select.name)
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
    addSelectedVM(select:VM, i:number){
        if(this.checkBox[i]){
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