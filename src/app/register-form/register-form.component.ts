import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {confirmedPasswordValidator} from './password-confirmed.validator';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm!: FormGroup;
  submited!:boolean;


  constructor(private formBuilder : FormBuilder) { 
    
  }
  //gittest
  ngOnInit(){
   this.registerForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      mobileNumber:['',Validators.required],
      address:['',Validators.required],
      dob:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',Validators.required,]
   }, {
     validator: confirmedPasswordValidator('password', 'confirmPassword')
  });
  }
  register(){
    console.log(this.registerForm.value);    
  }
  get f(){return this.registerForm.controls};

  onSubmit() {
    this.submited = true;

    
    if (this.registerForm.invalid) {
        return;
    }
    alert('SUCCESS!!');
}
}
