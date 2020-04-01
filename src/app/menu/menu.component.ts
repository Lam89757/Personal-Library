import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menu:any[]=[
    {name:'首页',url:'/home'},
    {name:'图书列表',url:'/booklist'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
