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
    selector: 'myData',
    templateUrl: 'myData.html',
})

/**
 * 业务功能:资料库
 */
export class myDataPage {
  /**
   * 上传参数配置
   */
  uploadImgFromCameraOrLib = {
    imgUrl: 'assets/imgs/avatar.png',
    serverUrl: 'http://192.168.4.95:8080/practice_server/filaAction.do',
    type: 'img',//上传类型：img/video/file
    source: 'selectSource',//imgPicker/camera/selectSource
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

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
