export enum State{
    ON = 1,
	OFF = 2,
	PAUSE = 3
}
export class VM{
    name: String;
    os: String;
    state: State;
} 