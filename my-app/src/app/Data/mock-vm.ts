import {VM,State} from './Vm';

export var openStackVMList:VM[]=[
    {name: "VM1",os:"linux",state:State.ON},
    {name: "VM2",os:"linux",state:State.OFF},
    {name: "VM3",os:"linux",state:State.PAUSE},
    {name: "VM4",os:"linux",state:State.ON},
    {name: "VM5",os:"linux",state:State.ON},
    {name: "VM8",os:"linux",state:State.ON},
    {name: "VM9",os:"linux",state:State.ON}
];
export var hDaaSVMList:VM[]=[
    {name: "VM1",os:"linux",state:State.OFF},
    {name: "VM3",os:"linux",state:State.OFF},
    {name: "VM5",os:"linux",state:State.ON},
    {name: "VM7",os:"linux",state:State.PAUSE}
];