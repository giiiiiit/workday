import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the DetailEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-edit',
  templateUrl: 'detail-edit.html',
})
export class DetailEditPage {
  textareaValue: string = '';
  textareaValueLength: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  textareaValueChange(value: string) {
    if (value.length > 5000) return;
    this.textareaValueLength = value.length;
  }
}
