import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-list',
  templateUrl: './saved-list.component.html',
  styleUrls: ['./saved-list.component.scss']
})
export class SavedListComponent implements OnInit {
  userList : any;
  constructor() { }

  ngOnInit(): void {
    this.userList=getUserList();
    console.log("In table component ",this.userList);
  }

}
function getUserList()
{
  var userListSaved= sessionStorage['userData'];
  var userJsonParsed =[];
  userJsonParsed= JSON.parse(userListSaved);
  console.log("User list saved111",userJsonParsed);
  return userJsonParsed;
}