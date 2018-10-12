import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'prpblemProperty',
    templateUrl: 'prpblemProperty.html',
})
/**
 * 业务功能：添加审核发现时，选择问题性质跳转到本页
 */
export class prpblemPropertyPage {
  /**
   * 问题性质数据列表
   */
  leveList = [
    {
      key: "一般",
      value: "NOMAL"
    },
    {
      key: "严重",
      value: "DABGER"
    }
  
  ]

  /**
   * 选中的问题性质
   */
  activeLevel

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    /**
     * 参数传入已选中的问题性质
     */
    this.activeLevel = navParams.data.level;
  }
  /**
   * 选择问题性质
   * @param item 
   */
  select(item){
    this.activeLevel = item;
  }
  /**
   * 返回
   */
  back() {
    this.viewCtrl.dismiss();
  }
/**
 * 保存
 */
  sure(){
     this.viewCtrl.dismiss({ level: this.activeLevel });
   
  }
 
  ionViewDidLoad() {
    
  }

}
