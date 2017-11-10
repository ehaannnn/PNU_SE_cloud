import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Admin } from '../Data/admin'
import { ADMINS } from '../Data/admin-mock'
import { LoginService } from './login.service'
import {Token} from '../Token'
import {UserToken} from '../user-manage/userToken'
import {User} from '../Data/user';

import {loginCheck} from '../Data/Login'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private token:Token,
    private logincheck:loginCheck
  ) {

    console.log(this.admin);
    
  }
  admin: Admin = { id: '', pw: '',users:null };
  adm= new Admin();
  
  ngOnInit() {
  }


  login(): void {
    let self = this;    
    

    self.token._promiseAdmin().then(function (text) {
      let chk = self.check();
      if (chk != -1) {
        self.adm=ADMINS[chk];
        LoginService._admin=self.adm;
        LoginService._admin.users=new Array<User>();
        console.log(LoginService._admin);
        self.logincheck.isLogin=true;
        UserToken.id=Token.id2;
        self.router.navigate(['/vm_manage/Farm']);

      }
      else {
        self.admin.pw = '';
        alert("아이디, 암호를 다시 확인하여 주세요");
      }
    }, function (error) {
      console.log(error);
    });
  }

  clear(): void {
    this.admin.id = '';
    this.admin.pw = '';
  }

  check(): number {
    let i=0;
    for(let adm of ADMINS){
      if(adm.id===this.admin.id && adm.pw===this.admin.pw)
        return i;
      i++;
    }
    return -1;
  }
}
