import { Component, OnInit } from '@angular/core';
import {NavigationEnd,Router} from '@angular/router';
import { filter } from 'minimatch';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public pageTitle='';

  constructor(public route:Router ) {
    route.events
    .subscribe((event:any)=>{
      if(event instanceof NavigationEnd)
      {
        if(event.url.search(/home/i)!=-1){
          this.pageTitle='首页';
        }else if(event.url.search((/booklist|bookdetail|bookedit/i))!=-1){
          this.pageTitle='图书列表';
        }else{
          this.pageTitle='error';
        }
      }
    })
   }

  ngOnInit() {
  }

}
