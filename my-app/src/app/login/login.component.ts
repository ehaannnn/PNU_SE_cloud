import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Admin } from '../Data/admin'
import { ADMINS } from '../Data/admin-mock'
import { LoginService } from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin: Admin = { id: '', pw: '',users:null };

  constructor(
    private router: Router,
    public _loginService:LoginService
  ) { }

  ngOnInit() {
  }


  login(): void {
    let chk=this.check();
    if (chk != -1) {
      this._loginService.getAdmin(ADMINS[chk]);
      this.router.navigate(['/vm_manage/Farm']);
    }
    else{
      this.admin.pw='';
      alert("아이디, 암호를 다시 확인하여 주세요");      
    }
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
