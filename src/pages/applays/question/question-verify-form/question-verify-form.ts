import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuestionVerifyFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-verify-form',
  templateUrl: 'question-verify-form.html',
})
export class QuestionVerifyFormPage {
  textareaValue: string = '';
  textareaValueLength: number = 0;
  tabClass: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionVerifyFormPage');
  }
  textareaValueChange(value: string) {
    if (value.length > 200) return;
    this.textareaValueLength = value.length;
  }
  chosetab(type) {
    this.tabClass = type;
  }

}
