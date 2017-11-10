import { Injectable } from '@angular/core';
import { Admin } from '../Data/admin';
import { User } from '../Data/User';

@Injectable()
export class LoginService {
  static _admin : Admin;
  constructor() { }

}
