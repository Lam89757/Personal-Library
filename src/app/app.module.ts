import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { CommonService } from './services/common.service';
import {SseService} from './services/sse.service';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { StarsComponent } from './book/stars/stars.component';
import { BookdetailComponent } from './book/bookdetail/bookdetail.component';
import { Erro404Component } from './erro404/erro404.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    SidebarComponent,
    BookListComponent,
    StarsComponent,
    BookdetailComponent,
    Erro404Component,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CommonService,SseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
