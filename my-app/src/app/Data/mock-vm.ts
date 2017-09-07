import {VM,State} from './Vm';
import {SnapShot} from './SnapShot';
export var openStackVMList:VM[]=[
    {name: "VM1",os:"linux",state:State.ON, CPU:1,MEM:16,DISK:10,snapshots:null},
];
export var hDaaSVMList:VM[]=[
    {name: "VM1",os:"linux",state:State.OFF, CPU:1,MEM:16,DISK:10,snapshots:null},
];