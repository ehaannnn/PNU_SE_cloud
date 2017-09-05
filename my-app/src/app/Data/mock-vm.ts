import {VM,State} from './Vm';

export var openStackVMList:VM[]=[
    {name: "VM1",os:"linux",state:State.ON, CPU:1,MEM:16,DISK:10},
];
export var hDaaSVMList:VM[]=[
    {name: "VM1",os:"linux",state:State.OFF, CPU:1,MEM:16,DISK:10},
];