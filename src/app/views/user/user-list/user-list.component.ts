import { Component, Input, OnChanges, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Gender, User } from 'src/app/dtos/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnChanges {

  @Input('list') userList = new Array<User>();

  @Input('user') user: User| null = new User();

  @Output() userEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if(simpleChanges.user && simpleChanges.user.currentValue) {
      const comingUser = {...simpleChanges.user.currentValue};
      if(comingUser.id) {
        this.userList.splice((comingUser.id-1) , 1, {...comingUser})
      } else {
        this.userList.push({...comingUser, id: this.userList.length+1})
      }
    }
  }

  editUser(index: number) {
    this.userEvent.emit(this.userList[index])
  }

  delete(index: number) {
    this.userList.splice(index, 1);
  }

}
