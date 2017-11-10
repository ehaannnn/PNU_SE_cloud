import { Component, OnInit } from '@angular/core';
import { User } from '../Data/user';
import { USERS } from '../Data/user-mock'
import { LoginService } from '../login/login.service'
import { Token } from '../Token'
import { UserToken } from './userToken'
import { SelectedServer } from '../SelectedServer-service'
import { Admin } from '../Data/admin';
import { Server } from '../Data/server';
@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css'],
})
export class UserManageComponent implements OnInit {

  adm: Admin;
  constructor(private selected: SelectedServer,
    private userTk: UserToken) {
    selected.server = new Server("OpenStack", null);
    userTk._HDaaSGETVDI().then(text=>{
      console.log(text);
    },function(error){
      console.log(error);
    });
  }


  ngOnInit() {

    let self = this;

    LoginService._admin = new Admin();

    self.adm = LoginService._admin;

    console.log(this.adm);
    console.log(self.selected.server.name);

    self.getList();

  }


  getList() {
    let self = this;
    let server_name = self.selected.server.name;
    console.log(Token.id);

    if (Token.id != null) {
      console.log("token id isn't null");
      if (server_name == "OpenStack") {
        self.userTk._promiseOpenstackListUser().then(text => {
          console.log("openstack api start");
          //console.log(text);
          let usr = JSON.parse(text['_body'])['users'];
          console.log(usr);
          let i: number = 0;
          for (; i < usr.length; ++i) {
            if (usr[i]['name'] == "admin")
              continue;
            let tmpUser = new User();
            tmpUser.id = usr[i]['id'];
            tmpUser.name = usr[i]['name'];
            tmpUser.state = usr[i]['enabled'];
            if (usr[i]['email'])
              tmpUser.email = usr[i]['email'];
            LoginService._admin.users.push(tmpUser);
          }
        }, function (error) {
          console.log(error);
        });
      }
      else if (server_name == "HDaaS") {
        /*
                    HDaaS_VMList.HDaaS_get_VMList().then(text => {
                        let i: number = 0;
                        console.log(text);
                        for (; i < text['VMList'].length; ++i) {
                            let instance_name = text['VMList'][i]['vmMasterName'];
        
                            let disk_size = text['VMList'][i]['hddNum'];
                            let _RAM = text['VMList'][i]['ram_size'];
                            let _CPU = text['VMList'][i]['cpu_core'];
        
                            let VM_tmp: VM = new VM(instance_name, "", State.ON, _CPU, _RAM, disk_size);
        
                            this.selected.server.vmlist.push(VM_tmp);
                            console.log(this.selected.server.vmlist[0].CPU);
                            
                        }
        
        
                    }, function (error) {
                        console.log(error);
                    });
                    */
      }

    }
    else {
      this.adm = new Admin();
      USERS.forEach(value => {
        this.adm.users.push(value);
      })
    }

  }
  userDelete() {
    let userList = LoginService._admin.users;
    let self = this;
    console.log(LoginService._admin.users);
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].isDeleted === true) {
        self.userTk._promiseOpenstackDeleteUser(userList[i]).then(text => {
          console.log("openstack delete start");
          console.log(text);
        }, function (error) {
          console.log(error);
        });
        LoginService._admin.users.splice(i, 1);
        i--;
      }
    }
  }
  userCreate() {
  }
}
