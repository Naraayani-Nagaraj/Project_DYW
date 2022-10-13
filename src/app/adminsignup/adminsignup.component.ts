import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit
{
  admins: Array<Admin> = [];
  storeMsg: string = "";
  loginMsg: string = "";
  logoutMsg: string = "";
  flag: boolean = false;
  email: string = "";
  password: string = "";
  dd: Date = new Date();

  constructor(public pser: AdminService) { }

  ngOnInit(): void
  {
    this.loadAdmin();
  }

  loadAdmin()
  {
    this.pser.loadAdminDetails().subscribe(res => this.admins = res);
  }

  storeAdmin(adminRef: NgForm)
  {
    this.pser.storeAdminDetails(adminRef.value).subscribe(res => this.storeMsg = res, error => console.log(error), () => this.loadAdmin());
  }

}
