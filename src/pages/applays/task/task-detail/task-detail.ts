import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TaskDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-detail',
  templateUrl: 'task-detail.html',
})
export class TaskDetailPage {
  @ViewChild('sidemenuselect') sidemenuSelect:any;
  // selectName:string = '请选择';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // 联级组件数据
  title="请选择审核主题";
  selectData = [
    {
      id: '1',
      title: '设备设施管理'
    },
    {
      id: '2',
      title: '生产运行'
    },
    {
      id: 3,
      title: '领导和承诺'
    },
    {
      id: 4,
      title: 'HSE方针'
    },
    {
      id: '5',
      title: '危害辨识、风险评价和控制措施'
    },
    {
      id: '6',
      title: '合规性管理'
    },
    {
      id: '7',
      title: '机构、责任和安全环保投入'
    },
    {
      id: '8',
      title: '能力培训和意识'
    },
    {
      id: '9',
      title: '制度和规程'
    }
  ];
  selectName = this.selectData[0].title;
  tapOpen(){
    this.sidemenuSelect.open();
  }
  selectChange(itemdata: Object) {
    this.selectName = itemdata['title'];
    this.sidemenuSelect.close();
  }
  goDetail(){
    this.navCtrl.push("TaskContentPage");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskDetailPage');
  }

}
