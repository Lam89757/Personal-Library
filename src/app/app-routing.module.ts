import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookdetailComponent } from './book/bookdetail/bookdetail.component';
import { Erro404Component } from './erro404/erro404.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'booklist',component:BookListComponent},
  {path:'bookdetail/:id',component:BookdetailComponent},
  {path:'**',component:Erro404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
