import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent implements OnInit {
  userDetailsForm !: FormGroup;
  userName = new FormControl('',Validators.required);
  gender =new FormControl('',Validators.required);
  userEmail = new FormControl('',Validators.required);
  userMobile = new FormControl('',Validators.required);
  aboutUser = new FormControl('',Validators.required);
  @Output() updateTable = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    createUserData();
    this.userDetailsForm = new FormGroup(
      {
        userName : new FormControl('',Validators.required),
        gender : new FormControl('',Validators.required),
        userEmail : new FormControl('',Validators.required),
        userMobile : new FormControl('',Validators.required),
        aboutUser : new FormControl('',Validators.required),
      }
    );
  }
  saveUserDetails(userForm:any)
  {
    this.userDetailsForm.patchValue({
      'userName':userForm.value.userName,
      'gender' : userForm.value.gender,
      'userEmail':userForm.value.userEmail,
      'userMobile': userForm.value.userMobile,
      'aboutUser':userForm.value.aboutUser
    })
    let userObjectToSave={
      'name':userForm.value.userName,
      'gender' : userForm.value.gender,
      'email':userForm.value.userEmail,
      'mobile': userForm.value.userMobile,
      'aboutMe':userForm.value.aboutUser
    }
    if(this.userDetailsForm.valid)
    {
      saveUserDetailsLocal(userObjectToSave);
     this.updateTable.emit();
    }
     
     
  }
  resetForm()
  {
    this.userDetailsForm.reset();
  }
  get fnErr(){return this.userDetailsForm.controls}
}
function createUserData()
{
  let userData=[{
    'name':'Sujitha',
    'gender':'Female',
    'email':'abc@gmail.com',
    'mobile':'0000000000',
    'aboutMe':'be happy'
  }]
  let userJson=JSON.stringify(userData)
  sessionStorage.setItem("userData",userJson);
}
function saveUserDetailsLocal(userDetail : any)
{
  var userListSaved= sessionStorage['userData'];
  var userJsonParsed =[];
  userJsonParsed= JSON.parse(userListSaved);
  console.log("User list saved111",userJsonParsed);
  let data={
    'name':userDetail.name,
    'gender':userDetail.gender,
    'email':userDetail.email,
    'mobile':userDetail.mobile,
    'aboutMe':userDetail.aboutMe
  }
  userJsonParsed.push(data);
  console.log("User list saved2222",userJsonParsed);
  let userJson=JSON.stringify(userListSaved);
  sessionStorage.setItem("userData",userJson);
}