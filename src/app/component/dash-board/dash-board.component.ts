import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private cartService: CartService, private api: ApiService) { }
  public products: any = [];
  public productList: any;

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
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }
}