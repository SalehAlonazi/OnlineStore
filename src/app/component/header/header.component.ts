import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem: any = 0;
  public searchTerm !: string;
  constructor(private cartService: CartService, private auth: AuthService) { }
  dash: boolean = false
  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.totalItem = res.length;
    })
    this.dash = this.auth.isAdmin
  }

}


