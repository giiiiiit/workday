import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  // 手写板配置项
  signpadOptions:object = {
    minWidth: 1.0, // 笔锋 float
    maxWidth: 5.0, // 粗细 float
    throttle: 20, // default 16 每秒绘制的次数,越细腻 int
    canvasHeight: 450,
    canvasWidth: 340,
    penColor: '#f50', // 画笔颜色
    backgroundColor: '#eee' // 背景颜色
  }

  onsignImgUrl(ImgUrl: String){
    console.log('返回成功')
    console.log(ImgUrl)
  }

}
