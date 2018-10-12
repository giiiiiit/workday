import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'passwordReset',
    templateUrl: 'passwordReset.html',
})

/**
 * 业务功能:资料库
 */
export class passwordResetPage {
  /**
   * 是否显示倒计时
   */
  showTime = false;
  time = 5;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  /**
   * 发送验证码
   */
  sendCode(){
    if (this.time >0){
      this.showTime = true;
      // setInterval(function () {
      //   alert("11111***"+this.time)
      //   this.time = this.time - 1;
      //   alert(this.time)
      // }, 1000)
    }else{
      this.showTime = false;
    }
    
  }
 
  /**
   * 返回
   */
  back(){
    this.navCtrl.pop();
    
  }
 
  
  ionViewDidLoad() {
    
  }

}
