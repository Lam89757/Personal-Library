import { Injectable,NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SseService {

public baseUrl="http://192.168.0.169:3000/api/";

  constructor(private ngzone:NgZone) { }

  observeStream(sseUrl:string):Observable<any>{
    const eventSource=new EventSource(this.baseUrl+sseUrl);
    return new Observable<any>(obs=>{
      eventSource.onmessage=event=>{
//由于zong对于监听数值变化的bug，接收推送值并不会同步更新到HTML中，需要手动run一下
        this.ngzone.run(()=>obs.next(event.data));
      }
    });
  }
}
