import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdcutsListComponent } from './component/prodcuts-list/prodcuts-list.component';
import { CartComponent } from './component/cart/cart.component';
import { UserComponent } from './component/user/user.component';
import { DashBoardComponent } from './component/dash-board/dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdcutsListComponent,
    CartComponent,
    UserComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
