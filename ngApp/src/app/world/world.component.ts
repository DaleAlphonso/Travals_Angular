
import { Component, OnInit } from '@angular/core';  
  
@Component({  
  selector: 'app-world',  
  templateUrl: './world.component.html',  
  //styleUrls : ['./custom.css']  
})  
export class WorldComponent implements OnInit {  
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