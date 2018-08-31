import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PageTemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-template',
  templateUrl: 'page-template.html',
})
export class PageTemplatePage {

  items: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        title: '登录页',
        url: 'LoginPage'
      },
      {
        title: '设置页',
        url: 'SettingPage'
      },
      {
        title: '详细页',
        url: 'DetailPage'
      },
      {
        title: '编辑页',
        url: 'DetailEditPage'

      },
      {
        title: 'UI布局-侧滑菜单',
        url: 'LayoutMenuPage'

      },
      {
        title: 'UI布局-顶部tab',
        url: 'LayoutTabTopPage'

      },
      {
        title: 'UI布局-底部tab',
        url: 'LayoutTabBottomPage'

      },
      {
        title: '列表页-文本信息列表',
        url: 'textPanelListPage'
      },
      {
        title: '列表页-缩略图列表',
        url: 'imgPanelListPage'
      },
      {
        title: '文件预览-(pdf/图片/视频预览)',
        url: 'imgVideoPdfListPage'
      }


     
    ]
  }

  itemSelected(page: string) {
    this.navCtrl.push(page);
  }
  itemSelected2(url) {
    this.navCtrl.push(url);
  }
}

