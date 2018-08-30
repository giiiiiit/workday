import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'text-panel-list',
  templateUrl: 'text-panel-list.html',
})
export class textPanelListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  list = [
    {
      title:"事业编改革后",
      content:"由于编制的取消，很多考生踌躇不已，不知道自己是否还应该有考的必要。去考呢，现在的事业单位人员的福利待遇已经远远比不过公务员了；不去考呢，公务员考试也不简单，担心自己花费时间却考不上。"
    },
    {
      title: "事业编改革后",
      content: "由于编制的取消，很多考生踌躇不已，不知道自己是否还应该有考的必要。去考呢，现在的事业单位人员的福利待遇已经远远比不过公务员了；不去考呢，公务员考试也不简单，担心自己花费时间却考不上。"
    },
    {
      title: "事业编改革后",
      content: "由于编制的取消，很多考生踌躇不已，不知道自己是否还应该有考的必要。去考呢，现在的事业单位人员的福利待遇已经远远比不过公务员了；不去考呢，公务员考试也不简单，担心自己花费时间却考不上。"
    },
    {
      title: "事业编改革后",
      content: "由于编制的取消，很多考生踌躇不已，不知道自己是否还应该有考的必要。去考呢，现在的事业单位人员的福利待遇已经远远比不过公务员了；不去考呢，公务员考试也不简单，担心自己花费时间却考不上。"
    },
    {
      title: "事业编改革后",
      content: "由于编制的取消，很多考生踌躇不已，不知道自己是否还应该有考的必要。去考呢，现在的事业单位人员的福利待遇已经远远比不过公务员了；不去考呢，公务员考试也不简单，担心自己花费时间却考不上。"
    }
  ]
  ionViewDidLoad() {
    
  }

}
