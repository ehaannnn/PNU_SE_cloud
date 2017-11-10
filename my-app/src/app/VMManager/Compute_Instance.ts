import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Token } from '../Token';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HDaaS_VMList {
    static instance:HDaaS_VMList;
    private static http;
    constructor(private http: Http) {
        //this.http = http;
        HDaaS_VMList.instance = this;
    }

    public HDaaS_get_VMList() : Promise<Object> {
        /*
        return new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                HDaaS_VMList.instance.http.get("/assets/VMList.json").subscribe(data => {
                    //Compute_Instance.HDaaSVDIID = data['VDIList'][0]['id'];
                    //console.log(Compute_Instance.HDaaSVDIID);
                    console.log(data);
                    resolve(data);
                });
            }, 3000);
        });
*/
        return this.http.get("/assets/VMList.json")
            .toPromise()
            .then((response) => {
                return response.json();
            }).catch((err) => {
                console.log(err);
            });
    }
};

@Injectable()
export class Compute_Instance {
    static instance:Compute_Instance;
    private static serverUrl = "http://164.125.70.18:50003/v2.1/02b6e616e6514959b40e4966cc004b07/servers/detail"
    private static flavorUrl = "http://164.125.70.18:50003/v2.1/02b6e616e6514959b40e4966cc004b07/flavors/detail"
    private static tokenHeaders;
    private static HDaaSHeader;
    private static HDaaSUrl = "https://164.125.70.15:8038/HDaaSWeb/JSONTest/VM";
    private data: Object;
    private static HDaaSVDIID;
    token_id : String;

    constructor(public token: Token,private  http: HttpClient) {
        this.token_id = Token.id;
        Compute_Instance.instance=this;
        //Compute_Instance.instance.http = http;
        Compute_Instance.tokenHeaders = new HttpHeaders().set('X-Auth-Token',Token.id);
        Compute_Instance.HDaaSHeader = new HttpHeaders().set('Content-Type','application/json');
    }

    HDaaS_get_VDIId = function() {
        return new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                Compute_Instance.instance.http.get("https://164.125.70.15:8038/HDaaSWeb/JSONTest/VDI").subscribe(data => {
                    Compute_Instance.HDaaSVDIID = data['VDIList'][0]['id'];
                    //console.log(Compute_Instance.HDaaSVDIID);
                    resolve(Compute_Instance.HDaaSVDIID);
                });
            }, 3000);
        });
    }
    

    server_promise = function () {
        return new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                console.log(Token.id);
                var data: any;
                Compute_Instance.instance.http.get(Compute_Instance.serverUrl,{ headers: Compute_Instance.tokenHeaders }).subscribe(response => {
                    this.data = (response);
                    console.log(response);
                    resolve(this.data);
                });
            }, 3000);
        });
    };

    flavor_promise = function () {
        return new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                var data: any;
                Compute_Instance.instance.http.get(Compute_Instance.flavorUrl,{ headers: Compute_Instance.tokenHeaders }).subscribe(response => {
                    this.data = (response);
                    resolve(this.data);
                });
            }, 3000);
        });
    };
}

