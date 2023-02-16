import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  constructor (private httpapi:ApiServiceService){}
  allproducts:any
  searchKey:string=''
   ngOnInit(): void {
      this.httpapi.getAllProducts().subscribe((result:any)=>{
        this.allproducts=result.Products
      },
      (result:any)=>{
        console.log(result.error.message);
      })
      this.httpapi.searchKey.subscribe((result:string)=>{
        this.searchKey=result
      })
   }

}
