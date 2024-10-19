import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiServiceService} from '../api-service.service';
import { error } from 'console';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;
  constructor(private router: Router, private apiCall: ApiServiceService) { }
  ngOnInit() {
    
  }

  onSubmit() {
    console.log(this.email);
    console.log(this.password);

    let params = {
      "email": this.email,
      "password": this.password
    }
    this.apiCall.login(params).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(["/", "dashboard"]);
    },
    (error) => {
      alert("pls enter correct email and password")
    });
  }

}
