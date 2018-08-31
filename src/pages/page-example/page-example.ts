import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-page-example',
  templateUrl: 'page-example.html',
})
export class PageExamplePage {
  items: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        title: '组织机构树',
        url: 'comonentsDemoZxjPage',
        page:'comonentsDemoZxjPage',
        type: 'modal'
      },
      {
        title: '相册图片查看器',
        url: 'comonentsDemoZxjPage',
        page: 'comonentsDemoZxjPage',
        type: 'modal'
      },
      {
        title: '视频播放器',
        url: 'comonentsDemoZxjPage',
        page: 'comonentsDemoZxjPage',
        type: 'modal'
      },
      {
        title: '图片列表懒加载组件',
        url: 'comonentsDemoZxjPage',
        page: 'comonentsDemoZxjPage',
        type: 'modal'

      },
      {
        title: 'pdf文档阅读器',
        url: 'comonentsDemoZxjPage',
        page: 'comonentsDemoZxjPage',
        type: 'modal'

      },
      {
        title: '附件上传下载组件(附件压缩传输组件)',
        url: 'comonentsDemoZxjPage',
        page: 'comonentsDemoZxjPage',
        type: 'modal'

      },
     
      {
        title: '相册图片查看器',
        url: 'comonentsDemoZxjPage',
        page: 'comonentsDemoZxjPage',
        type: 'modal'

      },

      {
        title: '图表组件',
        url: 'comonentsDemoZxjPage',
        page: 'comonentsDemoZxjPage',
        type: 'modal'

      },
      {
        title: '数据校验',
        url: 'TestPage',
        page: 'TestPage',
        type: 'modal'
      },
      {
        title: '地理定位、地理轨迹',
        url: 'ComponentMapComponent',
        page: 'TestPage',
        type: 'modal'
      },
      {
        title: '联级列表组件-侧滑式',
        url: 'SideMenuSelectComponent',
        page: 'TestPage',
        type: 'modal'
      },
      {
        title: '联级列表组件-卡片式',
        url: 'SelectMenuTopComponent',
        page: 'TestPage',
        type: 'card'
      },
      {
        title: '联级列表组件-悬浮式',
        url: 'SelectMenuBottomComponent',
        page: 'TestPage',
        type: 'modal'
      },
      {
        title: '分页组件',
        url: 'InfiniteScrollComponent',
        page: 'TestPage',
        type: 'modal'
      },
      {
        title: '手写签字组件',
        url: 'SampleSignaturepad',
        page: 'TestPage',
        type: 'modal'
      }
    ]
  }

  itemSelected(title, url, page, type) {
    this.navCtrl.push(page, {componentTitle: title, componentType: url, type: type});
  }
  goPage(){
    this.navCtrl.push('PageTemplatePage');
  }

}
