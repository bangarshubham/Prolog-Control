import { Component, OnInit } from '@angular/core';

//import { AuthService } from '../auth.service';
import {ProcessService} from '../../shared/process.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public processService: ProcessService, private fb: FormBuilder) 
  { }

  testForm:FormGroup;
  tcode : string;
  re:any;
  i:any;

  ngOnInit(): void{

    const ipPattern = 
    "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
    this.testForm = this.fb.group({
      ip: ['', Validators.pattern(ipPattern)]
    });
  }
     

  
 login() {
    
    this.re = /\./gi;
    this.tcode = this.tcode.replace(this.re,"-")
    this.processService.tcode = this.tcode;
    console.log("the code :" + this.tcode);

    //this.processService.getProc(this.tcode);
    this.processService.checkCollectionExist()

}
}


   



















//private user: Observable<firebase.User>;












// for(this.i=0;this.i<this.tcode.length;this.i++)
    //  {
    // //   //if(this.tcode[this.i] == ".")
      
    // //     //this.tcode.
      

    //  }
    // //this.x = document.getElementById("ip").nodeValue;

  // authError: any;

  // constructor(private auth: AuthService) { }

  // ngOnInit() {
  //   this.auth.eventAuthError$.subscribe( data => {
  //     this.authError = data;
  //   });
  // }

  // login(frm) {
  //   this.auth.login(frm.value.email, frm.value.password);
  // }*/

