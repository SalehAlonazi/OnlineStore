import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { CartComponent } from './component/cart/cart.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: "main", component: MainComponent },
  { path: "DashBorad", component: DashBoardComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
