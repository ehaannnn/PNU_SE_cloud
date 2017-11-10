import {Component} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import {Token} from '../Token';

@Component({
    selector:"vmcreate",
    templateUrl:"VMCreate.html",
    styleUrls: ['./VMCreate.css']
})

export class VMCreate{
    private static instance: VMCreate;
    VMname: string;
    flavorID: string;
    flavors = {"m1.tiny": "1", "m1.small": "3","m1.medium": "4", "m1.nano": "42", "m1.xlarge": "5", "m1.micro": "84" };
    flavorNames = ['m1.tiny','m1.small','m1.medium','m1.nano','m1.xlarge','m1.micro'];
    private static http: HttpClient;
    constructor(http: HttpClient) {
        VMCreate.instance = this;
        VMCreate.http = http;
    }

    _promise = function () {
       return new Promise(function (resolve, reject) {
           window.setTimeout(function () {
               var data: any;
               VMCreate.http.post("http://164.125.70.18:50003/v2.1/02b6e616e6514959b40e4966cc004b07/servers", JSON.stringify(
                   {
                    server : {
                        accessIPv4: "164.125.70.18",
                        name : VMCreate.instance.VMname,
                        imageRef : "a1b6ba95-3a65-4c0b-a8af-778df2392858",
                        flavorRef : VMCreate.instance.flavors[VMCreate.instance.flavorID],
                        availability_zone: "nova",
                        "OS-DCF:diskConfig": "AUTO",
                        metadata : {
                            "My Server Name" : "Apache1"
                        },
                        personality: [
                            {
                                path: "/etc/banner.txt",
                                contents: "ICAgICAgDQoiQSBjbG91ZCBkb2VzIG5vdCBrbm93IHdoeSBp dCBtb3ZlcyBpbiBqdXN0IHN1Y2ggYSBkaXJlY3Rpb24gYW5k IGF0IHN1Y2ggYSBzcGVlZC4uLkl0IGZlZWxzIGFuIGltcHVs c2lvbi4uLnRoaXMgaXMgdGhlIHBsYWNlIHRvIGdvIG5vdy4g QnV0IHRoZSBza3kga25vd3MgdGhlIHJlYXNvbnMgYW5kIHRo ZSBwYXR0ZXJucyBiZWhpbmQgYWxsIGNsb3VkcywgYW5kIHlv dSB3aWxsIGtub3csIHRvbywgd2hlbiB5b3UgbGlmdCB5b3Vy c2VsZiBoaWdoIGVub3VnaCB0byBzZWUgYmV5b25kIGhvcml6 b25zLiINCg0KLVJpY2hhcmQgQmFjaA=="
                            }
                        ],
                        security_groups: [
                            {
                                name: "default"
                            }
                        ],
                        user_data : "IyEvYmluL2Jhc2gKL2Jpbi9zdQplY2hvICJJIGFtIGluIHlvdSEiCg=="
                    },
                    "OS-SCH-HNT:scheduler_hints": {
                        "same_host": "48e6a9f6-30af-47e0-bc04-acaed113bb4e"
                    }

                   }), { headers: new HttpHeaders().set('X-Auth-Token',Token.id.toString() ) }).subscribe(response => {
                       this.data = (response);
                       resolve(this.data);
                   }
                   );

           }, 3000);
       });
   };
   addVM() {
        console.log("in");
       this._promise().then(text => {
           console.log(text);
       }, function (error) {
           console.log(error);
       });
   }
   cancel() {

   }
}
