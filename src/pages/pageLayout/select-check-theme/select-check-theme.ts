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
    selector: 'select-check-theme',
    templateUrl: 'select-check-theme.html',
})
export class selectCheckThemePage {
  activeTab = '0';
  activeData = {
    departmentName:"被审核单位名称"
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  selectDepartment(){
    this.navCtrl.push("departmentTreePage");
  }
  back() {
    this.navCtrl.pop();
  }
  switchTab(str) {
    this.activeTab = str;
  }
  
  ionViewDidLoad() {
    
  }

}
