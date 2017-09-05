import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class Token{
    private static tokenUrl = "http://164.125.70.18:50001/v2.0/tokens"
    private static tokenHeaders = new HttpHeaders().set('Content-Type','application/json');
    private data:Object;
    private static http : HttpClient;
    public static id : string;

    constructor( http: HttpClient){
        Token.http = http;
    }
    _promise = function () {
        return new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                var data: any;
                Token.http.post(Token.tokenUrl, JSON.stringify(
                    {
                        auth: {
                            tenantName: "demo",
                            passwordCredentials: {
                                username: "demo",
                                password: "openstack"
                            }
                        }
                    }), { headers: Token.tokenHeaders }).subscribe(response => {
                        this.data = (response);
                        Token.id = response['access']['token']['id'];
                        resolve(this.data);
                    }
                    );

            }, 3000);
        });
    };
}

