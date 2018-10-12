import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting-edit',
  templateUrl: 'setting-edit.html',
})
export class SettingEditPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  name = '周周周';
  popPage() {
    this.navCtrl.pop();
  }
  clearValue() {
    this.name = '';
  }
}
