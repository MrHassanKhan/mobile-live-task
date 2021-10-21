import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Gender, User } from 'src/app/dtos/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  

  userForm  = this.fb.group(
    {
      id: [null],
      name: ['', [Validators.required, Validators.minLength(4)]],
      age: ['', [Validators.required]],
      gender: [null, [Validators.required]]
    }
  );

  initialuserList = [
    {id: 1, name: 'Hassan', age: 25, gender: Gender.Male},
    {id: 2, name: 'Imran', age: 25, gender: Gender.Male}
  ];

  newUser = null;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }

  AddUser() {
    this.newUser = {...this.userForm.value};
    this.userForm.reset();
  }

  editUser(event:User) {
    this.userForm.patchValue({
      id: event.id,
      name: event.name,
      gender: event.gender,
      age: event.age
    })
  }


  reset() {
    this.userForm.reset();
    this.newUser = null;
  }

  

}
