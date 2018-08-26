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
        url: ''
      },
      {
        title: '图片查看器',
        url: ''
      },
      {
        title: '视频查看器',
        url: ''
      },
      {
        title: '图标组件',
        url: ''
      },
      {
        title: '附件上传/下载',
        url: ''
      },
      {
        title: '数据校验',
        url: ''
      },
      {
        title: '地理定位、地理轨迹',
        url: 'ComponentMapComponent'
      },
      {
        title: '联级列表组件',
        url: ''
      },
      {
        title: '分页组件',
        url: 'InfiniteScrollComponent'
      },
      {
        title: '手写签字组件',
        url: 'SampleSignaturepad'
      }
    ]
  }

  itemSelected(title, url) {
    this.navCtrl.push('TestPage', {componentTitle: title, componentType: url});
  }
}
