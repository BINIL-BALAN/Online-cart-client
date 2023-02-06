import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{
    id:string=''
    product:any
    rating:string [] = []
     constructor (private router:ActivatedRoute,private api:ApiServiceService){}
  ngOnInit(): void {
     this.router.params.subscribe((result:any)=>{
      this.id=result.id
    })
      this.api.viewProduct(this.id).subscribe((result:any)=>{
        console.log(result.product)
        this.product = result.product
        for(let i=0;i<Math.floor(this.product.rating.rate);i++){
          this.rating.push('fa fa-star text-danger mb-4 mx-1')
        }
      },
      (result:any)=>{
        console.log(result.error.message);
      })
    
  }


}
