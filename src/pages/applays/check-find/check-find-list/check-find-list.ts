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
    selector: 'check-find-list',
    templateUrl: 'check-find-list.html',
})

/**
 * 业务功能
 */
export class checkFindListPage {
  /**
   * 默认激活的tab按钮
   */
  activeTab= '0';
  /**
   *已选择要上传的离线文章总数
   */
  totalUpload = 0;
  /**
   * 是否显示全选标志
   */
  showAllSelect = true;
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
      level:"一般",
      lastTime:"2018-09-10"
    },
    {
      title: "事业编改革后",
      content: "由于编制的取消，很多考生踌躇不已",
      select: false,
      summary: "各项财务收支不仅必须过帐，而且必须审核，以求准确无误。各项财务收支不仅必须过帐，而且必须审核，以求准确无误。各项财务收支不仅必须过帐，而且必须审核，以求准确无误。",
      level: "一般",
      lastTime: "2018-09-10"
    }
  ]

  /**
   * 获取所有选中的文章
   * @param arr 
   */
  getSelectedAll(arr) {
    let data = [];
    data.length = 0;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index].select == true){
        data.push(arr[index]);
      }
    }
    return data;
  }
  /**
   * 选中某一项
   * @param item 
   */
  select(item){
    item.select = !item.select;
    let data = this.getSelectedAll(this.dataList);
    this.totalUpload = data.length;
    if(this.totalUpload == this.dataList.length){
      this.showAllSelect = false;
    }else{
      this.showAllSelect = true;
    }

  }
  /**
   * 全选
   */
  selectAll(arr,select){
    if (arr.length >0) {
      for (let index = 0; index < arr.length; index++) {
        arr[index].select = select;
      }
      this.showAllSelect = !this.showAllSelect;
      let data = this.getSelectedAll(this.dataList);
      this.totalUpload = data.length;
    }
  
  }
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
   * 跳到详情页
   */
  goDetail(){
    this.navCtrl.push("checkFindDetailPage");
  }
  /**
   * 添加审核发现
   */
  add(){
    this.navCtrl.push("checkFindAddPage");
  }
  /**
  * 跳到查询页
  */
  goSearch() {
    this.navCtrl.push("checkFindSearchPage");
  }
  ionViewDidLoad() {
    
  }

}
