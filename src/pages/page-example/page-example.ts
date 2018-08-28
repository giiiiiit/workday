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
        title: '组织架构',
        url: 'comonentsDemoZxjPage',
        page:'comonentsDemoZxjPage'
      },
      {
        title: '图片查看',
        url: 'comonentsDemoZxjPage',
        page: 'comonentsDemoZxjPage'
      },
      {
        title: '视频播放',
        url: 'comonentsDemoZxjPage',
        page: 'comonentsDemoZxjPage'
      },
      {
        title: '图片懒加载',
        url: 'comonentsDemoZxjPage',
        page: 'comonentsDemoZxjPage'

      },
      {
        title: 'pdf文件查看',
        url: 'comonentsDemoZxjPage',
        page: 'comonentsDemoZxjPage'

      },
      {
        title: '附件上传',
        url: 'comonentsDemoZxjPage',
        page: 'comonentsDemoZxjPage'

      },
      {
        title: '下载',
        url: 'comonentsDemoZxjPage',
        content: "file-download",
        page: 'comonentsDemoZxjPage'

      },
      {
        title: '轮播图',
        url: 'comonentsDemoZxjPage',
        page: 'comonentsDemoZxjPage'

      },
      {
        title: 'echart图表',
        url: 'comonentsDemoZxjPage',
        page: 'comonentsDemoZxjPage'

      },
      {
        title: '数据校验',
        url: 'TestPage',
        page: 'TestPage'
      },
      {
        title: '地理定位、地理轨迹',
        url: 'ComponentMapComponent',
        page: 'TestPage'
      },
      {
        title: '联级列表组件',
        url: 'SelectComponent',
        page: 'TestPage'
      },
      {
        title: '分页组件',
        url: 'InfiniteScrollComponent',
        page: 'TestPage'
      },
      {
        title: '手写签字组件',
        url: 'SampleSignaturepad',
        page: 'TestPage'
      }
    ]
  }

  itemSelected(title, url,page) {
    this.navCtrl.push(page, {componentTitle: title, componentType: url});
  }
}
