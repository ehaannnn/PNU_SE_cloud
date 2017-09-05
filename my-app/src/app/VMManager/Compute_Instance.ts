import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Token } from '../Token';

@Injectable()
export class Compute_Instance {
    static instance:Compute_Instance;
    private static Url = "http://164.125.70.18:50003/v2.1/02b6e616e6514959b40e4966cc004b07/servers/detail"
    private static tokenHeaders;

    private data: Object;
    ;
    token_id : String;

    constructor(public token: Token,private  http: HttpClient) {
        this.token_id = Token.id;
        Compute_Instance.instance=this;
        Compute_Instance.tokenHeaders = new HttpHeaders().set('X-Auth-Token',Token.id);
    }

    _promise = function () {
        return new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                var data: any;
                Compute_Instance.instance.http.get(Compute_Instance.Url,{ headers: Compute_Instance.tokenHeaders }).subscribe(response => {
                    this.data = (response);
                    resolve(this.data);
                });
            }, 3000);
        });
    };
}

