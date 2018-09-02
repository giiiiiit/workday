import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the LayoutTabBottomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-layout-tab-bottom',
  templateUrl: 'layout-tab-bottom.html',
})
export class LayoutTabBottomPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  tab1Root = 'DetailPage';
  tab2Root = 'DetailEditPage';
  tab3Root = 'LoginPage';
}
