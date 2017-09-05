import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Token } from '../Token';
import { VM , State} from '../data/vm';
import {SelectedServer} from '../SelectedServer-service';

@Injectable()
export class URLService{
    public static instance:URLService=null;
    private static tokenTime;
    private openstackTokenURL: string = "/v2.0/tokens";    
    private TokenBody:any={auth:{tenantName:"demo",passwordCredentials : {username : "demo",password : "openstack"}}};
    private TokenHeader = new HttpHeaders().set("Content-Type","application/json");
    private instanceURL: string="/v2.1/servers/detail"
    private instanceHeader = new HttpHeaders();
    public instanceList:Promise<void>;

    private test;
    constructor(private http:HttpClient){
        URLService.instance=this;
        this.test = false;
    }

    getToken(){
        return Token.id;
    }

    // private requestToken(){      
    //     if(this.test&&this.expiredToken())
    //         return this.token;
    //     else  {
    //         this.test=true;
    //         this.http.post(this.openstackTokenURL,this.TokenBody,{headers:this.TokenHeader})
    //         .toPromise()
    //         .then(response => {
    //             this.token=response['access']['token']['id'];                                
    //             URLService.tokenTime  = new Date();
    //             return this.token;
    //         })
    //         .catch(response=>console.log(response));        
    //     }
    // }

    private expiredToken(){
        var date = new Date();
        return (date.getTime()/60000 - URLService.tokenTime.getTime()/60000) < 7100;
    }

    getInstanceList(url:string,selected:SelectedServer){
        this.http.get(url+this.instanceURL,{headers:this.instanceHeader.set("X-Auth-Token", Token.id)})
        .toPromise()
        .then(response=>{
            let idx=0;
            this.instanceList=response["servers"];
            var instanceListNum:number = response["servers"].length;
            selected.server.vmlist = new Array<VM>(instanceListNum);
            for(;idx<instanceListNum;++idx){
                selected.server.vmlist[idx]=new VM();
                this.getInstanceInfo(url,this.instanceList[idx]["id"],selected.server.vmlist[idx],idx);
            }
            console.log(this.instanceList['length']);
        }).catch(response=>console.log(response));
    }
    getInstanceInfo(url:string,id:string,vm:VM,idx:number){
        console.log(this.instanceList[idx]);
        vm.name=this.instanceList[idx]["name"];
        console.log(this.instanceList[idx]['status']);
        if(this.instanceList[idx]['status']==='ACTIVE')
            vm.state=State.ON;
        else if(this.instanceList[idx]['status'] ==='EXIT')
            vm.state=State.OFF;
        else
            vm.state=State.PAUSE;
    }
}