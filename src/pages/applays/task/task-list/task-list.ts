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
    selector: 'task-list',
    templateUrl: 'task-list.html',
})
export class taskListPage {
  activeTab= '0';
  totalUpload = 0;
  showAllSelect = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  

  dataList = [
    {
      title:"长庆油田-长庆实业集团有限公司",
      content:"由于编制的取消，很多考生踌躇不已，不知道自己是否还应该有考的必要。去考呢，现在的事业单位人员的福利待遇已经远远比不过公务员了；不去考呢，公务员考试也不简单，担心自己花费时间却考不上。",
      select:false,
      summary: "各项财务收支不仅必须过帐，而且必须审核，以求准确无误。。",
      num:"10",
      totalnum:"365",
      findnum:"100",
      lastTime:"2018上"
    },
    {
      title: "长庆油田-水电厂",
      content: "由于编制的取消，很多考生踌躇不已",
      select: false,
      summary: "各项财务收支不仅必须过帐，而且必须审核，以求准确无误。各项财务收支不仅必须过帐，而且必须审核，以求准确无误。各项财务收支不仅必须过帐，而且必须审核，以求准确无误。",
      num:"10",
      totalnum:"365",
      findnum:"99",
      lastTime:"2018下"
    },
    {
      title:"长庆油田-长庆实业集团有限公司",
      content:"由于编制的取消，很多考生踌躇不已，不知道自己是否还应该有考的必要。去考呢，现在的事业单位人员的福利待遇已经远远比不过公务员了；不去考呢，公务员考试也不简单，担心自己花费时间却考不上。",
      select:false,
      summary: "各项财务收支不仅必须过帐，而且必须审核，以求准确无误。。",
      num:"10",
      totalnum:"365",
      findnum:"100",
      lastTime:"2018上"
    },
    {
      title: "长庆油田-水电厂",
      content: "由于编制的取消，很多考生踌躇不已",
      select: false,
      summary: "各项财务收支不仅必须过帐，而且必须审核，以求准确无误。各项财务收支不仅必须过帐，而且必须审核，以求准确无误。各项财务收支不仅必须过帐，而且必须审核，以求准确无误。",
      num:"10",
      totalnum:"365",
      findnum:"99",
      lastTime:"2018下"
    }
  ]

  dataList2 = [
    {
      title:"采样",
      content:"采样（sampling）也称取样，指把时间域或空间...",
      select:false,
      summary: "未按照采样规则进行采样，采样结果无法采用。",
      num:"8",
      totalnum:"365",
      findnum:"100",
      lastTime:"2018上"
    },
    {
      title:"购置",
      content:"购买（长期使用的器物）：图书资料为了扩...",
      select:false,
      summary: "未按照购置法规进行购置，购置设备不符合规定...",
      num:"10",
      totalnum:"365",
      findnum:"100",
      lastTime:"2018上"
    },
    {
      title:"投放计划",
      content:"也可以形容某种形式的投放，如：短信投放，信...",
      select:false,
      summary: "投放计划不符合标准",
      num:"6",
      totalnum:"365",
      findnum:"100",
      lastTime:"2018上"
    }
  ]


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
  select(item){
    item.select = !item.select;
    let data = this.getSelectedAll(this.dataList2);
    this.totalUpload = data.length;
    if(this.totalUpload == this.dataList2.length){
      this.showAllSelect = false;
    }else{
      this.showAllSelect = true;
    }

  }
  selectAll(arr,select){
    if (arr.length >0) {
      for (let index = 0; index < arr.length; index++) {
        arr[index].select = select;
      }
      this.showAllSelect = !this.showAllSelect;
      let data = this.getSelectedAll(this.dataList2);
      this.totalUpload = data.length;
    }
  
  }

  switchTab(str){
    this.activeTab = str;
  }
  back(){
    this.navCtrl.pop();
  }
  goDetail(){
    this.navCtrl.push("TaskDetailPage");
  }
  add(){
    this.navCtrl.push("checkFindAddPage");
  }
  ionViewDidLoad() {
    
  }

}
