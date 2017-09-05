export enum State{
    ON = 1,
	OFF = 2,
	PAUSE = 3
}
export class VM{
    public name: String;
    public os: String;
    public state: State;
} 