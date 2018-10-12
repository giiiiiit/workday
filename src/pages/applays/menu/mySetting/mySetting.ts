import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'mySetting',
    templateUrl: 'mySetting.html',
})

/**
 * 业务功能:资料库
 */
export class mySettingPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }
  
 
  /**
   * 返回
   */
  back(){
    this.navCtrl.pop();
    
  }
 
  /**
   * 清楚缓存弹框
   */
  
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: '确定要清理缓存吗？',
      cssClass:'cleanBuffer',
      // message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: '确定',
          handler: () => {
            console.log('Agree clicked');
          }
        },
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
        
      ]
    });
    confirm.present();
  }
  ionViewDidLoad() {
    
  }

}
