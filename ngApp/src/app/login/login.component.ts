
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})

export class LoginComponent implements OnInit {
  public message!:string;
  public loginmsg!: string;
  
  constructor() { }  
  
  ngOnInit(): void {  
    this.message = "This is Custom Pipes"
    this.loginmsg = "login"; 
  }

}

