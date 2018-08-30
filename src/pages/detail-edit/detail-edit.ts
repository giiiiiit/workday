import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable }from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';
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
  @ViewChild('wordInput') private wordinput: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailEditPage');
  }

  ngOnInit() {
    console.log(this.wordinput);
    let wordd = this.wordinput
// 　　Observable.fromEvent(wordd,'focus').subscribe((event: any) => {
//     　　　　// 操作
//             console.log(event);
//     });
  }

}
