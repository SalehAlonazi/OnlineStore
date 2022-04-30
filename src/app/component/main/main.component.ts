import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

// import { CartService } from 'src/app/service/cart.service' ;

@Component({
  selector: 'app-products',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public productList: any;

  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        });
        console.log(this.productList)
      });
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }


}