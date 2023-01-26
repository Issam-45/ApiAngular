import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../http/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users: User[];

  myCommande : any = {
    userId : '',
    id : '',
    title  : '',
    body  : ''
   };
  constructor(private userService:UserService) {
    this.users=[];
   }
   

  ngOnInit(): void {
  }

 
   addUser()
   {
  //   this.userService.add(this.myCommande).subscribe((user)=>{
  //     this.users= [user,...this.users]
  //   })
     
   }

  // public addUser(user: User): Observable<any> {
  //   const url = 'https://reqres.in/api/users';
  //   return this.userService.add<any>(url, user);
  // }

 

}
