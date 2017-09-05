import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Token } from '../Token';

@Injectable()
export class Compute_Instance {
    static instance:Compute_Instance;
    private static serverUrl = "http://164.125.70.18:50003/v2.1/02b6e616e6514959b40e4966cc004b07/servers/detail"
    private static flavorUrl = "http://164.125.70.18:50003/v2.1/02b6e616e6514959b40e4966cc004b07/flavors/detail"
    private static tokenHeaders;

    private data: Object;
    ;
    token_id : String;

    constructor(public token: Token,private  http: HttpClient) {
        this.token_id = Token.id;
        Compute_Instance.instance=this;
        Compute_Instance.tokenHeaders = new HttpHeaders().set('X-Auth-Token',Token.id);
    }

    server_promise = function () {
        return new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                var data: any;
                Compute_Instance.instance.http.get(Compute_Instance.serverUrl,{ headers: Compute_Instance.tokenHeaders }).subscribe(response => {
                    this.data = (response);
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

