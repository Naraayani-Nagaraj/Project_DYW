import { Component, OnInit } from '@angular/core';

//Admin class of admin.ts file
import { Admin } from '../admin';

import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit
{
  admins: Array<Admin> = [];
  storeMsg: string = "";
  loginMsg: string = "";
  logoutMsg: string = "";
  flag: boolean = false;
  email: string= "";
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

  //Storing admin details
  storeAdmin(adminRef: NgForm)
  {
    this.pser.storeAdminDetails(adminRef.value).subscribe(res => this.storeMsg = res, error => console.log(error), () => this.loadAdmin());
  }

}
