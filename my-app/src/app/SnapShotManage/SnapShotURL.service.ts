import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../Token';
import { VM, State } from '../Data/vm';
import { SelectedServer } from '../SelectedServer-service';
import { SnapShot } from '../Data/SnapShot';
@Injectable()
export class URLService {
    public static instance: URLService = null;
    private static tokenTime;
    private openstackTokenURL: string = "/v2.0/tokens";
    private TokenBody: any = { auth: { tenantName: "demo", passwordCredentials: { username: "demo", password: "openstack" } } };
    private TokenHeader = new HttpHeaders().set("Content-Type", "application/json");
    
    
    private instanceURL: string = "/v2.1/servers/detail"
    private instanceHeader = new HttpHeaders();
    public instanceList: Promise<void>;
    
    private imageURL: string ="/v2.1/images/detail";

    private deleteIMGURL: string='/v2/images/';

    private test;
    constructor(private http: HttpClient) {
        URLService.instance = this;
        this.test = false;
    }

    getToken() {
        return Token.id;
    }

    private expiredToken() {
        var date = new Date();
        return (date.getTime() / 60000 - URLService.tokenTime.getTime() / 60000) < 7100;
    }

    getInstanceList(url: string, selected: SelectedServer) {
        this.http.get(url + this.instanceURL, { headers: this.instanceHeader.set("X-Auth-Token", Token.id) })
            .toPromise()
            .then(response => {
                let idx = 0;
                this.instanceList = response["servers"];
                var instanceListNum: number = response["servers"].length;
                selected.server.vmlist = new Array<VM>(instanceListNum);
                for (; idx < instanceListNum; ++idx) {
                    selected.server.vmlist[idx] = this.getInstanceInfo(url, this.instanceList[idx]["id"],  idx);
                    this.getSnapshots(url,selected,idx);
                }
                console.log(this.instanceList['length']);
            }).catch(response => console.log(response));
    }
    getInstanceInfo(url: string, id: string, idx: number) {
        let st: State;
        if (this.instanceList[idx]['status'] === 'ACTIVE')
            st = State.ON;
        else if (this.instanceList[idx]['status'] === 'EXIT')
            st = State.OFF;
        else
            st = State.PAUSE;
        let name: string = this.instanceList[idx]["name"];
        console.log(this.instanceList[idx]);
        console.log(this.instanceList[idx]['status']);
        return new VM(name, "", st, 0, 0, 0);
    }
    getSnapshots(url:string,selected: SelectedServer,idx:number){
        this.http.get(url + this.imageURL, { headers: this.instanceHeader.set("X-Auth-Token", Token.id) })
        .toPromise()
        .then(response => {
            let idxx = 0;
            this.instanceList = response["images"];
            var instanceListNum: number = response["images"].length;
            selected.server.vmlist[idx].snapshots = new Array<SnapShot>();
            for (; idxx < instanceListNum; ++idxx) {
                try{
                    console.log(this.instanceList[idxx]['metadata']['block_device_mapping'][0]['source_type']);
                }catch(expiredToken){
                    continue;
                }
                let snapshot = new SnapShot();
                snapshot.id=this.instanceList[idxx]['id'];
                snapshot.name=this.instanceList[idxx]['name'];
                snapshot.created=this.instanceList[idxx]['created'];
                selected.server.vmlist[idx].snapshots.push(snapshot);
                console.log(snapshot.name);
            }
            console.log(this.instanceList['length']);
        }).catch(response => console.log(response));
    }

    createSnapshot(){

    }
    deleteSnapshot(url:string, id:string){
        this.http.get(url + this.deleteIMGURL+id, { headers: this.instanceHeader.set("X-Auth-Token", Token.id) })
        .toPromise()
        .then(response => {
            console.log("delete\n"+response);
        }).catch(response => console.log(response));
    }


}