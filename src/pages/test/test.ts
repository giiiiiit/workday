import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})

export class TestPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  // 手写板配置项
  public signpadOptions:object = {
    minWidth: 1.0, // 笔锋 float
    maxWidth: 5.0, // 粗细 float
    throttle: 20, // default 16 每秒绘制的次数,越细腻 int
    canvasHeight: 325,
    penColor: '#eee', // 画笔颜色
    backgroundColor: '#fff' // 背景颜色
  }

  onsignImgUrl(ImgUrl: String){
    console.log('返回成功')
    console.log(ImgUrl)
  }

}
