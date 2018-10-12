import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  showMenu: boolean = false;
  showMask: boolean = true;
  showOn = true;
  slidsOption = {
    slidesList:["assets/imgs/slide1.jpg", "assets/imgs/slide2.jpg", "assets/imgs/slide1.jpg"]
  }
  nav = [
    {
      path: 'taskListPage',
      title: '我的任务',
      icon: '/assets/imgs/index-icon-1.png'
    },
    {
      path: 'checkFindListPage',
      title: '审核发现',
      icon: '/assets/imgs/index-icon-2.png'
    },
    {
      path: 'libraryListPage',
      title: '材料库',
      icon: '/assets/imgs/index-icon-3.png'
    },
    {
      path: 'QuestionListPage',
      title: '往期问题',
      icon: '/assets/imgs/index-icon-4.png'
    },
    {
      path: 'QuestionVerifyPage',
      title: '问题验证',
      icon: '/assets/imgs/index-icon-5.png'
    },
    {
      path: 'rulesCollectionPage',
      title: '法规标准',
      icon: '/assets/imgs/index-icon-6.png'
    },
    {
      path: 'EchartsPage',
      title: '统计分析',
      icon: '/assets/imgs/index-icon-7.png'
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  chosetab(path) {
    if (path) {
      this.navCtrl.push(path)
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
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

  /**
   * 跳到我的收藏页
   */
  goCollectListPage() {
    this.navCtrl.push('collectListPage')
  }

  /**
   * 跳到我的信息页
   */
  goMyDataPage(){
    this.navCtrl.push('myDataPage')
  }
  /**
   * 跳到系统设置页
   */
  goSettingPage(){
    this.navCtrl.push('mySettingPage')
  }

  /**
   * 跳到重置密码
   */
  resetPassword(){
    this.navCtrl.push('passwordResetPage')
  }

}
