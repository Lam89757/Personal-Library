import { Component, OnInit } from '@angular/core';
import { SseService } from '../services/sse.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sse:SseService) { }

  public value:number=0;
  ngOnInit() {
    this.sse.observeStream("sse").subscribe(value=>{
      this.value=value;
    })
  }



}
