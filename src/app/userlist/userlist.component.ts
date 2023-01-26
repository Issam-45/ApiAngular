import { Component, OnInit } from '@angular/core';
import { UserService } from '../http/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
users: User[];
  constructor(private userService:UserService) { 
    this.users=[];
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser()
  {
    this.userService.getAll().subscribe({
      next:response=>{
        this.users = response
      },
      error:error=>{
        console.log(error)
      }
    }
    )
  }

  deleteUser(id:any)
  {
    this.userService.delete(id).subscribe(()=>{
      this.users = this.users.filter(
        user=>user.id !=id 
      )
    })
  }

  updateUser()
  {
    this.userService.update
  }

  

}
