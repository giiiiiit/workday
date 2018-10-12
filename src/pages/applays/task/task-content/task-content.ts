import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TaskContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-content',
  templateUrl: 'task-content.html',
})
export class TaskContentPage {
  textareaValue: string = '';
  textareaValueLength: number = 0;
  showModal: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskContentPage');
  }
  source() {
    this.showModal = true;
  }
  close() {
    this.showModal = false;
  }
  goDetail(){
    this.navCtrl.push("checkFindAddPage");
  }
  textareaValueChange(value: string) {
    if (value.length > 200) return;
    this.textareaValueLength = value.length;
  }

}
