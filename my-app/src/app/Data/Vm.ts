import { SnapShot } from './SnapShot';
export enum State{
    ON = 1,
	OFF = 2,
	PAUSE = 3
}
export class VM{
    name: string;
    os: string;
    state: State;
    CPU : number;
    MEM : number;
    DISK : number;
    constructor(name : string, os:string, state:State, CPU: number, MEM:number, DISK:number,VID:string="") {
        this.name = name;
        this.os = os;
        this.state = state;
        this.CPU = CPU;
        this.MEM = MEM;
        this.DISK = DISK;
        this.volumeID=VID;
    }
    snapshots:SnapShot[];
    volumeID:string;
} 