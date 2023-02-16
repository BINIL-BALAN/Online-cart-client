import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount:number=0
    constructor(private api:ApiServiceService,private cartservice:CartService){}
  ngOnInit(): void {
    this.cartservice.cart.subscribe((result:any)=>{
      this.cartCount=result.length
    })
  }
    search(event:any){
      let searchTerm = event.target.value
      this.api.searchKey.next(searchTerm)
    }
}
