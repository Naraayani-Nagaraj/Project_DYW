import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit
{
  users: Array<Users> = [];
  storeMsg: string = ""
  deleteMsg: string = ""
  updateMsg: string = ""
  loginMsg: string = ""
  logoutMsg: string = ""
  flag: boolean = false;
  email: string = "";
  password: string = "";
  dd: Date = new Date();

  constructor(public pserv: UsersService) { }

  ngOnInit(): void
  {
    this.loadUsers();
  }

  loadUsers()
  {
    this.pserv.loginUser().subscribe(res => this.users = res);
    console.log('use', this.users);
  }

  logoutUser(email: string)
  {
    this.pserv.logoutUserDetails(email).subscribe(res => this.logoutMsg = res, error => console.log(error), () => this.loadUsers());
  }

  storeUser(userRef: NgForm)
  {
    this.pserv.storeUserDetails(userRef.value).subscribe(res => this.storeMsg = res, error => console.log(error), () => this.loadUsers());
  }

  deleteUser(email: string)
  {
    this.pserv.deleteUserDetails(email).subscribe(res => this.deleteMsg = res, error => console.log(error), () => this.loadUsers())
  }

  updateUser(user: Users)
  {
    console.log('first', user);
    this.flag = true;
    this.email = user.email;
    this.password = user.password;
  }

  updateUserInfo()
  {
    let user = { "email": this.email, "password": this.password }
    console.log('check', user);
    this.loadUsers
    this.pserv.updateUserDetails(user).subscribe(result => this.updateMsg = result, error => console.log(error),
      () => {
        console.log('teo')
        this.loadUsers
        this.flag = false;
      })
  }
}
