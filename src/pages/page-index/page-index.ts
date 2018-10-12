import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-page-index',
  templateUrl: 'page-index.html'
})
export class PageIndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    
  }
  tab1Root = 'PageExamplePage';
  tab2Root = 'PageTemplatePage';
  tab3Root = 'IndexPage';
 
  ionViewDidLoad() {

  }

}
