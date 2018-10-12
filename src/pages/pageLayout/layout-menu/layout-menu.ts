import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LayoutMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-layout-menu',
  templateUrl: 'layout-menu.html',
})
export class LayoutMenuPage {
  showMenu: boolean = false;
  showMask: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LayoutMenuPage');
  }

  open() {
    this.showMask = false;
    setTimeout(() => {
      this.showMenu = true;
    },0)
  }

  close() {
    this.showMenu = false;
    setTimeout(() => {
      this.showMask = true;
    },300)
  }

}
