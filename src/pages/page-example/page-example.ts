import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeolocationServer } from '../../base/Geolocation';

@IonicPage()
@Component({
  selector: 'page-page-example',
  templateUrl: 'page-example.html'
})
export class PageExamplePage {
  res: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocationServer: GeolocationServer) {
    
  }

  ngOnInit() {
    console.log('钩子加载');
    
    this.geolocationServer.GetGeolocationWatch()
  }

}
