import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../http/produit.service';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  produits : Produit[];

  constructor(private produitService:ProduitService) { 
    this.produits=[]
  }

  ngOnInit(): void {
    this.produitService.getAll().subscribe(res=>console.log(res)
      //{
      //   next:(response)=>{
      //     this.produits = response;
      //   },
      //  error(error)=>{
      //   console.log("ERREUUR");
      //  },
      //  complete:()=>{
      //   console.log("complete")
      //  }

      
        
    );

    
  }
  


}
