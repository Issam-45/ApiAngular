import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getAll():Observable<User[]>
  {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/posts");
  }

  delete( id:any)
  {
    return this.http.delete("https://jsonplaceholder.typicode.com/posts/${id}");
  }

  add(User: any)
  {
    return this.http.post("https://jsonplaceholder.typicode.com/posts",User);
  }

  update(User: any)
  {
    return this.http.put("https://jsonplaceholder.typicode.com/posts/${id}",User)
  }
}
