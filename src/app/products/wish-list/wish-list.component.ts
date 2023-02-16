import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  products:any
  emptyStatus:boolean=false
   constructor (private api:ApiServiceService,private cart:CartService) {}
   ngOnInit(): void {
      this.api.getWishlist().subscribe((result:any)=>{
        this.products=result.products
        if(this.products.length==0){
          this.emptyStatus=true
        }else{
          this.emptyStatus=false
        }
      },
      (result:any)=>{
        
      })
   }

   deleteWishlistItem(id:string){
     this.api.deleteWishlistItem(id).subscribe((result:any)=>{
      this.products=result.products
      if(this.products.length==0){
        this.emptyStatus=true
      }else{
        this.emptyStatus=false
      }
    },
    (result:any)=>{
      console.log(result);
    })
   }

   addToCart(product:any){
      this.cart.addTocart(product)
      this.api.deleteWishlistItem(product.id).subscribe((result:any)=>{
        this.products=result.products
        if(this.products.length==0){
          this.emptyStatus=true
        }else{
          this.emptyStatus=false
        }
      },
      (result:any)=>{
        console.log(result);
      })
   }
}
