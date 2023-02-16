import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
cart = new BehaviorSubject([])
cartItems:any =[]
  constructor() { }
  addTocart(product:any){
    this.cartItems.push(product)
    this.cart.next(this.cartItems)
    this.grandTotal() 
  }

  grandTotal(){
    let total=0
    this.cartItems.map((item:any) =>{
      total+=item.price
    })
    return total
  }

  removeItem(index:any){
     this.cartItems.splice(index,1)
     this.grandTotal()
  }

  emptyCart(){
    this.cartItems = []
    this.cart.next(this.cartItems)
  }
}
