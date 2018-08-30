import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LayoutMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'side-menu-select',
  templateUrl: 'side-menu-select.html',
})
export class SideMenuSelectComponent {
  showMenu: boolean = false;
  showMask: boolean = true;
  widths: string;
  @Input() data: Array<Object>;
  @Input() title: string;
  @Input() styleWidth: string;
  @Output() onChange = new EventEmitter<Object>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.widths = this.styleWidth || '65%';
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
