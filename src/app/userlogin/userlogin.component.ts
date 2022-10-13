import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators, FormsModule } from '@angular/forms';
import { Users } from '../users';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit
{
  public loginForm!: FormGroup

  constructor(public service: UsersService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void
  {
    this.loginForm = this.formBuilder.group ({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void
  {
    this.service.loginUser().subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if (user) {
        alert("Login Successful!!");
        this.loginForm.reset();
        localStorage.setItem('token', res.token)
        this.router.navigate(['/products'])
      }
      else {
        alert("Can't login! Invalid credentials!")
      }
    })
  }
}
