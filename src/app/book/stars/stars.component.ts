import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {
  @Input()
  rating:number=0;
  stars:boolean[];
  constructor() { }

  @Output()
  private outer=new EventEmitter<number>();

  ngOnInit() {
    this.stars=[];
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating)
    }
  }

  //监控父组件传来的值，有变化就执行，更新评级的信息
  ngOnChanges(){
    this.stars=[];
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating)
    }
  }

//通过单击事件子组件向父组件传值，根据点击星星的索引确定要传递的值
  sendRating(key){
    this.outer.emit(key+1);
  }

}
