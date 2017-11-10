import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Token } from '../Token';
import { User } from '../Data/user';

@Injectable()
export class UserToken {
    private static tokenUrl = "http://164.125.70.18:50001/v3/users/"
    //private data: any=null;
    private static http: HttpClient;
    private static http2: Http;
    public static id = Token.id;

    constructor(http: HttpClient, Http2: Http) {
        UserToken.http = http;
        UserToken.http2 = Http2;

    }

    _promiseOpenstackCreateUser = function (usr: User) {
        return new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                let data: any;
                let head = new HttpHeaders({'Content-Type': 'application/json','X-Auth-Token': UserToken.id});
                console.log(head.get("Content-Type"));
                console.log(head.get("X-Auth-Token"));
                console.log(usr.name);
                UserToken.http.post(UserToken.tokenUrl ,
                    JSON.stringify({
                        user: {
                            name: usr.name
                        }
                    }), { headers: head }).subscribe(response => {
                        data = (response);
                        resolve(data);
                    }
                    );
            }, 3000);


        });
    };

    _promiseOpenstackListUser = function () {
        return new Promise(function (resolve, reject) {
            let data: any;
            let head = new Headers();
            head.append('X-Auth-Token', UserToken.id);
            UserToken.http2.get(UserToken.tokenUrl, { headers: head }).subscribe(response => {
                data = (response);
                console.log(data);
                resolve(data);
            })
        });
    };

    _promiseOpenstackDeleteUser = function (usr: User) {
        return new Promise(function (resolve, reject) {
            let data: any;
            let head = new Headers();
            head.set('Content-Type', 'application/json');
            head.append('X-Auth-Token', UserToken.id);
            UserToken.http2.delete(UserToken.tokenUrl + usr.id,
                {
                    body: JSON.stringify({ user_id: usr.id }),
                    headers: head
                }).subscribe(Response => {
                    data = (Response);
                    resolve(data);
                })
        });


    };

    _promiseHDaaSListUser = function () {

        return new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                var head = new Headers();
                head.append('X-Auth-Token', Token.id);
                UserToken.http2.get("https://164.125.70.15:8038/HDaaSWeb/JSONTest/VM").subscribe(data => {
                    // Read the result field from the JSON response.
                    console.log(this.data);
                    //console.log(data['VMList']);
                });
            }, 3000);
        });

    }
}

