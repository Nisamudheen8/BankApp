import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-regstr',
  templateUrl: './regstr.component.html',
  styleUrls: ['./regstr.component.css']
})
export class RegstrComponent implements OnInit {
  

  //register form
  registerForm = this.fb.group({
    uname : ['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    acno : [''],
    pswd : [''],
  })
 

  constructor(private ds: DataService, private router: Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

 register(){
   var uname = this.registerForm.value.uname
   var acno = this.registerForm.value.acno
   var pswd = this.registerForm.value.pswd   

   if(this.registerForm.valid){

    const result =  this.ds.register(uname,acno,pswd)

   if (result){
     alert("Successfully registered")
     this.router.navigateByUrl("")
   }

   else{
     alert("Already existing customer.... Please login!")
   }
   }

   else{
    alert("invalid form")
   }
  
   
 }

}
