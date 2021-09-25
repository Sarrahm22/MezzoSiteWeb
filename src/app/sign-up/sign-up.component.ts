import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
firstname="";
lastname="";
email="";
job="";
password="";
password2="";


  constructor() { }

  ngOnInit(): void {}
  submitForm(){
    const message = `ton nom est ${this.firstname} , ton email est ${this.email} `;
    alert(message);
  }
}
