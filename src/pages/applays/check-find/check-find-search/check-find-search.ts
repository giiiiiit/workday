import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'check-find-search',
    templateUrl: 'check-find-search.html',
})
/**
 * 业务功能：添加审核发现时，选择问题性质跳转到本页
 */
export class checkFindSearchPage {
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

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  /**
   * 选择问题性质
   * @param item 
   */
  searchSelect(searchText){
    console.log("$$$$$$$$$$")
    alert(searchText)
  }
  /**
   * 返回
   */
  back() {
    this.navCtrl.pop();
  }
/**
 * 保存
 */
  sure(){
    this.navCtrl.push("checkFindAddPage", { level: this.activeLevel});
  }
 
  ionViewDidLoad() {
    
  }

}
