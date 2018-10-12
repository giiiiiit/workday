import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuestionVerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-verify',
  templateUrl: 'question-verify.html',
})
export class QuestionVerifyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionVerifyPage');
  }

  tapform() {
    this.navCtrl.push('QuestionVerifyFormPage')
  }

  back(){
    this.navCtrl.pop();
  }

}
