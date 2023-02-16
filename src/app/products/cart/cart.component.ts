import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any=[]
  i:number=1
  totalPrice:number=0
  discount:number=0
  discountTotal:number=0
  checkOutMessage:string=''
  constructor (private cartservice:CartService , private router:Router) { }
  ngOnInit(): void {
    this.cartservice.cart.subscribe((result:any)=>{
       this.cartItems=result 
    })
    this.totalPrice=this.cartservice.grandTotal()
    this.discountTotal=this.totalPrice
  }

  deleteItem(index:any){
    this.cartservice.removeItem(index)
    this.totalPrice=this.cartservice.grandTotal()
    this.discountTotal=this.totalPrice
  }

  emptyCart(){
    this.cartservice.emptyCart()
  }

  discound3precentage(){
    this.discountTotal=this.totalPrice-(this.discount=this.totalPrice * .03)
  }

  discound10precentage(){
    this.discountTotal=this.totalPrice-(this.discount=this.totalPrice * .10)
  }

  discound15precentage(){
    this.discountTotal=this.totalPrice-(this.discount=this.totalPrice * .15)
  }

  checkOut(){
    this.checkOutMessage='Oreder placed'
    setTimeout(() => {
      this.emptyCart()
      this.router.navigateByUrl('')
    }, 3000);
  }
}
