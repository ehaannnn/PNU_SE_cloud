import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class VMListService{
    private static tokenUrl = "http://164.125.70.18:50001/v2.0/tokens"
    private static tokenHeaders = new HttpHeaders().set('Content-Type','application/json');
    private data:Object;
    private static http : HttpClient;
    constructor( http: HttpClient){
        VMListService.http = http;
    }
     _promise = function() {    
        return new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                var data: any;
                VMListService.http.post(VMListService.tokenUrl, JSON.stringify(
                {auth:
                     { tenantName : "demo",
                     passwordCredentials : 
                        {
                            username : "demo", 
                            password : "openstack"
                        } 
                    }
                }), {headers: VMListService.tokenHeaders}).subscribe(response => {
                        this.data=(response);
                        resolve(this.data);
                    }   
                );  
                
            }, 3000);
        });
        /*
        var val = this.http
        .post(this.tokenUrl, JSON.stringify(
        {auth:
             { tenantName : "demo",
             passwordCredentials : 
                {
                    username : "demo", 
                    password : "openstack"
                } 
            }
        }), {headers: this.tokenHeaders}).subscribe(response => {
                this.data=(response);
            }   
        );    */
        //console.log("B"+this.data['token']);
        //console.log(val['access']);
        //return val;
    };
}

