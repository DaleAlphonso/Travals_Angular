import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {AngularFileUploaderModule} from 'angular-file-uploader';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent {
 @ViewChild('fileInput',{static :false}) fileInput!:ElementRef;
  constructor(private http:HttpClient) { }

  
 onFileUpload(){
   const imageBlob = this.fileInput.nativeElement.files[0];
   const file = new FormData();
   file.set('file',imageBlob);
   this.http.post('http://localhost:3000/',file).subscribe(response =>{
     console.log(response);
   });
 }
}
