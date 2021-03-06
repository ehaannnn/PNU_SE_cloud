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
    
    private snapshotURL: string ="/v2.1/os-snapshots";

    private createIMGURL: string='/v2.1/os-snapshots';
    private deleteIMGURL: string='/v2.1/os-snapshots/';

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
                console.log(response["servers"])
                for (; idx < instanceListNum; ++idx) {
                    console.log(this.instanceList[idx]['id']);
                    var id= this.instanceList[idx]['id'];
                    selected.server.vmlist[idx] = this.getInstanceInfo(id,  idx);
                }
                console.log(this.instanceList['length']);
                this.getSnapshots(url,selected);
            }).catch(response => console.log(response));
    }
    getInstanceInfo(id: string, idx: number) {
        let st: State;
        let name: string;
        let Vid:string;
        if (this.instanceList[idx]['status'] === 'ACTIVE')
            st = State.ON;
        else if (this.instanceList[idx]['status'] === 'EXIT')
            st = State.OFF;
        else
            st = State.PAUSE;
        try{
        name = this.instanceList[idx]["name"];
        Vid = this.instanceList[idx]["os-extended-volumes:volumes_attached"][0]['id']; 
        }catch(response){
            Vid = "None";
        }
        console.log(this.instanceList[idx]);
        console.log(this.instanceList[idx]['status']);
        return new VM(name, "cirros", st, 0, 0, 0,Vid);
    }
    getSnapshots(url:string,selected: SelectedServer){
        this.http.get(url + this.snapshotURL, { headers: this.instanceHeader.set("X-Auth-Token", Token.id) })
        .toPromise()
        .then(response => {
            let idxx = 0;
            this.instanceList = response["snapshots"];
            var instanceListNum: number = response["snapshots"].length;
            for(let idx=0;idx<selected.server.vmlist.length;++idx){
                 selected.server.vmlist[idx].snapshots = new Array<SnapShot>();
            }
        
            for (; idxx < instanceListNum; ++idxx) {
                let VID = this.instanceList[idxx]['volumeId'];
                let vmIDX=0;
                for(;vmIDX<selected.server.vmlist.length&&!(selected.server.vmlist[vmIDX].volumeID===VID);++vmIDX);
                
                console.log(vmIDX+" "+selected.server.vmlist.length);
                if(vmIDX<selected.server.vmlist.length){
                    let snapshot = new SnapShot();
                    snapshot.id=this.instanceList[idxx]['id'];
                    snapshot.name=this.instanceList[idxx]['id'];
                    snapshot.created=this.instanceList[idxx]['createdAt'];
                    selected.server.vmlist[vmIDX].snapshots.push(snapshot);
                    console.log(snapshot.name);
                }
            }
            console.log(this.instanceList['length']);
        }).catch(response => console.log(response));
    }

    // createSnapshot(url:string,id:string){
    //     this.http.post(url + this.createIMGURL, { headers: this.instanceHeader.set("X-Auth-Token", Token.id),
    //     body:{
    //         snapshot: {
    //             volume_id: id,
    //             force: true
    //          }
    //     } })
    //     .toPromise()
    //     .then(response => {
    //         console.log("create\n");
    //         console.log(response);
    //     }).catch(response => console.log(response));
    // }
    createSnapshot = function (url:string, id:string) {
        console.log(url + URLService.instance.createIMGURL+" "+id);
        return new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                var data: any;
                URLService.instance.http.post(url + URLService.instance.createIMGURL, JSON.stringify(
                    {
                        snapshot: {
                            volume_id: id,
                            force: true
                        }
                    }), { headers: new HttpHeaders().set('X-Auth-Token',Token.id.toString() ) }).subscribe(response => {
                        this.data = (response);
                        console.log(response);
                        resolve(this.data);
                    }
                    );
 
            }, 3000);
        });
    };

    deleteSnapshot(url:string, id:string){
        this.http.delete(url + this.deleteIMGURL+id, { headers: this.instanceHeader.set("X-Auth-Token", Token.id) })
        .toPromise()
        .then(response => {
            console.log("delete\n");
            console.log(response);
        }).catch(response => console.log(response));
    }
}