import { Component, OnInit } from '@angular/core';
import { User } from '../../Data/user';
import { LoginService } from '../../login/login.service'
import { UserToken } from '../userToken'
import {Router} from "@angular/router";


@Component({
  selector: 'app-useradd',
  templateUrl: 'useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent implements OnInit {
  
  
  flag=true;  
  usr=new User();
  obj=document.getElementById("add");
  constructor(public userTk: UserToken,
    public router:Router
  ) { 
    this.flag=true;
  }
  ngOnInit() {
    this.flag=true;
    this.usr.id="";
    this.usr.pw="";
    this.usr.email="";
  }
  addUser() {
    let self=this;
    console.log(self.usr);
    self.userTk._promiseOpenstackCreateUser(this.usr).then(text => {
      console.log("openstack create user start");
      console.log(text);
      alert("등록이 성공하였습니다");
      
      this.flag=false;
      //this.router.navigate()
    }, function (error) {
      console.log(error);
      alert("등록이 실패하였습니다");
    });

    
  }
  
  close(){
    this.flag=false;
  }

  on(){
    this.flag=true;
    this.router.navigate(['/userManage/list'],{fragment:'add'});
  }
}
