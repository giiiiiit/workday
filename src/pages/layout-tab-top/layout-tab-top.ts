import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LayoutTabTopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-layout-tab-top',
  templateUrl: 'layout-tab-top.html',
})
export class LayoutTabTopPage {
  tabStatus = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  choseTab(type) {
    this.tabStatus = type;
  }
}
