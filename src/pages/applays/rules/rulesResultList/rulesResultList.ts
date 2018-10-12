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
    selector: 'rulesResultList',
    templateUrl: 'rulesResultList.html',
})

/**
 * 业务功能:资料库
 */
export class rulesResultListPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  

  /**
 * pdf列表数据
 */
  pdfList = [
    {
      title: "事业编改革后事业编改革后事业编改革后事业编改革后事业编改革后事业编改革后",
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
    },
    {
      title: "事业编改革后",
      content: "由于编制的取消，很多考生踌躇不已，不知道自己是否还应该有考的必要。去考呢，现在的事业单位人员的福利待遇已经远远比不过公务员了；不去考呢，公务员考试也不简单，担心自己花费时间却考不上。"
    }
  ]

  classList = [
    {
      name:"国家标准",
      tags: ["环境消防", "金融服务", "新能源", "环境消防", "金融服务", "新能源", "环境消防", "金融服务", "新能源"]
    },
    {
      name: "工程建设",
      tags: ["绿色发展", "注重质量", "新能源", "绿色发展", "注重质量", "新能源", "绿色发展", "注重质量", "新能源"]
    },
    {
      name: "商标创新",
      tags: ["业绩考核", "金融服发展方式务", "新能源", "业绩考核", "发展方式", "新能源", "业绩考核", "发展方式", "新能源"]
    },
    {
      name: "勘探与生产",
      tags: ["油气勘探", "炼油与化工", "新能源", "油气勘探", "炼油与化工", "新能源", "油气勘探", "炼油与化工", "新能源"]
    }

  ];
  activeClass = {
    name: "工程建设",
    tags: ["绿色发展", "注重质量", "新能源", "绿色发展", "注重质量", "新能源", "绿色发展", "注重质量", "新能源"]
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
    this.navCtrl.push("ruleDetailPage");
  }
  /**
    * 跳到查询页
    */
  goSearch() {
    this.navCtrl.push("ruleSearchPage");
  }
  
 
 
  ionViewDidLoad() {
    
  }

}
