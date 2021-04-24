
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})

export class HomeComponent implements OnInit {

  public message! : string;  
  public todayDate!: Date;  
  public amount!: number;  
  public msg!: string;
  
  constructor() { }  
  
  ngOnInit(): void {  
    this.message = "This is a Custom Pipe";  
    this.todayDate = new Date();  
    this.amount = 100;  
    this.msg = "Inbuilt Pipes";  
  }  

}
