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
    selector: 'library-list',
    templateUrl: 'library-list.html',
})

/**
 * 业务功能:资料库
 */
export class libraryListPage {
  /**
   * 默认激活的tab按钮
   */
  activeTab= '0';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  
  /**
   * 数据初始化
   */

  dataList = [
    {
      title:"事业编改革后事业编改革后事业编改革后事业编改革后事业编改革后事业编改革后",
      content:"由于编制的取消，很多考生踌躇不已，不知道自己是否还应该有考的必要。去考呢，现在的事业单位人员的福利待遇已经远远比不过公务员了；不去考呢，公务员考试也不简单，担心自己花费时间却考不上。",
      select:false,
      summary: "各项财务收支不仅必须过帐，而且必须审核，以求准确无误。。",
      author:"勘探与生产分公司",
      lastTime:"2018-09-10"
    },
    {
      title: "事业编改革后",
      content: "由于编制的取消，很多考生踌躇不已",
      select: false,
      summary: "各项财务收支不仅必须过帐，而且必须审核，以求准确无误。各项财务收支不仅必须过帐，而且必须审核，以求准确无误。各项财务收支不仅必须过帐，而且必须审核，以求准确无误。",
      author: "勘探与生产分公司",
      lastTime: "2018-09-10"
    }
  ]




  /**
   * 切换tab按钮
   */

  switchTab(str){
    this.activeTab = str;
  }
  /**
   * 返回
   */
  back(){
    this.navCtrl.pop();
  }
  /**
   * 跳到详情页librarySearchPage
   */
  goDetail(){
    this.navCtrl.push("libraryDetailPage");
  }
  /**
    * 跳到查询页
    */
  goSearch() {
    this.navCtrl.push("librarySearchPage");
  }
  
  ionViewDidLoad() {
    
  }

}
