import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-registerauth',
  templateUrl: './registerauth.component.html',
  styleUrls: ['./registerauth.component.css']
})
export class RegisterauthComponent implements OnInit {
  public registermsg!: string;
 registerUserData = {name:'',email: '',password:'',phone:'',age:'',address:''}
  constructor(private _auth: AuthService,private _router: Router) { }
  
  ngOnInit(): void {  
    
    this.registermsg = "register"; 
  }
  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/loginauth'])
      },
      err => console.log(err)
    )      
  }

}
