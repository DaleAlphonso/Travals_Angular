// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';  
// @Component({ 
//   selector: 'app-register',
//   templateUrl: 'register.component.html' ,
  
// })
// export class RegisterComponent {}



import { Register } from './hero';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
 // styleUrls: ['https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css']
})
export class RegisterComponent {


  model = new Register(1, '', '', NaN, '', NaN, '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Register(1, '', '', NaN, '', NaN , '');
  }
    


}
