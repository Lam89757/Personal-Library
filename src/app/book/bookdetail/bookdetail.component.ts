import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  public book;//Book类实例化对象 
  public bookId: number;//路由传过来的id
  public nameCheck: boolean;//bookName输入校验结果
  public priceCheck: boolean;//bookPrice输入校验结果
  public valueCheck: boolean;//分类对应的checkbox至少选一个的校验结果
  public result:Observable<any>;

  bookModule: FormGroup;//form实例化对象
  fb: FormBuilder = new FormBuilder();

  constructor(public route: ActivatedRoute, public common: CommonService,private http:HttpClient) {
  }

  ngOnInit() {
    let id:number=this.route.snapshot.params["id"];
    this.result=this.common.getBookById(id);
    //初始化book对象，根据传过来的id获取book对象
    this.book={
      "BookName":"",
      "BookPrice":0,
      'BookDesc':'',
      'BookRating':0,
      'BookCategories':[{type:'IT',isChecked:false},{type:'金融',isChecked:false},{type:'互联网',isChecked:false}]
    }
     //根据book对象初始化表单，并赋予初始值
    this.bookModule = this.fb.group({
      bookName: [this.book.BookName, [Validators.required, Validators.minLength(3)]],
      bookPrice: [this.book.BookPrice, [Validators.required]],
      bookDesc: [this.book.BookDesc],
      bookCategories: this.fb.array([false,false,false], this.categoryValidator)
    });
    if(id!=0){
      this.result.subscribe(data=>{
        this.book=data;
        this.bookModule.reset({
          bookName:this.book.BookName,
          bookPrice:this.book.BookPrice,
          bookDesc:this.book.BookDesc,
          bookRating:this.book.BookRating,
          bookCategories:[this.book.BookCategories[0].isChecked,this.book.BookCategories[1].isChecked,this.book.BookCategories[2].isChecked]
        });
      });
    }

  }

  //自定义checkbox校验器，判断3个option值全为false则返回{result:true}
  categoryValidator(bookCategories: FormArray) {
    let valid: boolean = false;
    bookCategories.controls.forEach((category) => {
      if (category.value == true) {
        valid = true;
      }
    })
    return valid ? null : { result: true };
  }

  //子组件传过来值先保存到变量book中，不对数据库做更新，当点击保存按钮在更新数据库
  getRating(rating: number) {
    this.book.BookRating = rating;
    // this.common.updateBook(this.bookId,rating);
  }

  //点击提交按钮，保存修改及新增数据
  updateBook() {
    let httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'my-auth-token',
      })
    };
    let newBook = {
      "BookName": this.bookModule.value.bookName,
      "BookPrice": this.bookModule.value.bookPrice,
      "BookDesc": this.bookModule.value.bookDesc,
      "BookRating": this.book.BookRating,
      "BookCategories": [
        {type:"IT", isChecked:this.bookModule.value.bookCategories[0].isChecked},
        {type:"金融", isChecked:this.bookModule.value.bookCategories[1].isChecked},
        {type:"互联网", isChecked:this.bookModule.value.bookCategories[2].isChecked}
      ]
    }
    //调用service中的更新图书方法，将修改后的book对象传递到服务器
    this.http.post("http://192.168.0.169:3000/api/book/add",newBook,httpOptions).subscribe((data:any)=>{
      console.log(data);
    });
  }

  //获取bookName表单对应formControl，并传递到HTML中
  get bookName() { return this.bookModule.get('bookName'); }

  //检测HTML状态变化，校验各个表单元素
  ngDoCheck(): void {
    this.nameCheck = this.bookModule.get('bookName').valid || this.bookModule.get('bookName').untouched;
    this.priceCheck = this.bookModule.get('bookPrice').valid || this.bookModule.get('bookPrice').untouched;
    this.valueCheck = this.bookModule.get('bookCategories').valid || this.bookModule.get('bookCategories').pristine;
  }

}
