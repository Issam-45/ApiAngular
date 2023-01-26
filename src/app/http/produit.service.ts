import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  getAll():Observable<Produit[]>
  {
    return this.http.get<Produit[]>("https://jsonplaceholder.typicode.com/users");
  }
}
