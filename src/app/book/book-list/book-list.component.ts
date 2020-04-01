import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

import { FormControl } from '@angular/forms';
import{debounceTime} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public searchInput:FormControl=new FormControl();

  // public books:Observable<any>;
  public books:any[]=[];
  constructor(public common:CommonService) { }

  ngOnInit() {
    //获取全部图书
    // this.books=this.common.getBook();
    this.common.getBook().subscribe((data:any)=>{
      this.books=data;
    })
    
    //根据书名获取图书
    this.searchInput.valueChanges//搜索栏输入后修改值
    .pipe(debounceTime(500))
    .subscribe((value)=>{
      this.common.getBookByName(value).subscribe((book:any)=>{
        this.books=book;
      })
      })
    }
  
}
