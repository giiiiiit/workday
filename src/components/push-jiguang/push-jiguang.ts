import { Component, Output, EventEmitter } from '@angular/core';
import { JPush } from "@jiguang-ionic/jpush";
@Component({
  selector: 'push-jiguang',
  templateUrl: 'push-jiguang.html'
})

export class PushJiguangComponent {


/* 组件使用说明
  功能：开启激光推送功能
  使用说明：页面中调用该插件，将会开启激光推送通知功能，具体推送内容取决于激光服务器
  返回值：无
  用例： <push-jiguang></push-jiguang>
*/
  @Output() recieveNotice = new EventEmitter(); 
  @Output() openNotice = new EventEmitter(); 
  constructor(public jpush: JPush) {

   
  }
  ngOnInit(){
    this.jpush.init()
      .then(res => {

      }).catch(err => {

      });
   

    document.addEventListener(
      "jpush.receiveNotification",
      (event: any) => {
      
        this.recieveNotice.emit(JSON.stringify(event));
      },
      false
    );

    document.addEventListener(
      "jpush.openNotification",
      (event: any) => {
        this.openNotice.emit(JSON.stringify(event));
      },
      false
    );

 
  }




}
