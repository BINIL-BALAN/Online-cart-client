import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  // to pass stream of data to one component to another
  searchKey = new BehaviorSubject('')

  constructor(private api: HttpClient) { }

  getAllProducts() {
    return this.api.get('http://localhost:3000/Allproducts')
  }

  viewProduct(id: string) {
    return this.api.get('http://localhost:3000/viewProduct/' + id)
  }

  addToWishlist(product:any){
   return this.api.post('http://localhost:3000/add-to-wishlist',product)
  }

  getWishlist(){
    return this.api.get('http://localhost:3000/get-wishlist')
  }

  deleteWishlistItem(id:string){
    return this.api.delete('http://localhost:3000/deletewishlistitem/'+id)
  }
}
