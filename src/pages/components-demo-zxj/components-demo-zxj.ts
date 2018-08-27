import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




/**
 * Generated class for the PageExamplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'components-demo-zxj',
  templateUrl: 'components-demo-zxj.html',
})
export class comonentsDemoZxjPage {
  componentType: string;
  componentTitle: string;
  imgList1 = ["assets/imgs/slide1.jpg", "assets/imgs/slide2.jpg", "assets/imgs/slide3.jpg"];
  imgList2 = [
    { url: "assets/imgs/slide1.jpg", urlBig: "assets/imgs/slide1.jpg" }, { url: "assets/imgs/slide1.jpg", urlBig: "assets/imgs/slide1.jpg" }, { url: "assets/imgs/slide2.jpg", urlBig: "assets/imgs/slide2.jpg" }, { url: "assets/imgs/slide3.jpg", urlBig: "assets/imgs/slide3.jpg" }];
  pdfSrc = "http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.componentTitle = this.navParams.get('componentTitle');
    if (!this.navParams.get('componentType')) {
      this.componentType = this.navParams.get('componentType');
    } 
  }

  optionPie = {
    title: {
      text: '浏览器使用状况统计',
      subtext: '纯属虚构',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['baidu', 'Google', 'fox', 'qq', '360']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: 'baidu' },
          { value: 310, name: 'Google' },
          { value: 234, name: 'fox' },
          { value: 135, name: 'qq' },
          { value: 1548, name: '360' }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  optionBar = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }]
  };
  optionLine = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }]
  }



  successUpload(event){
    alert("成功");
    console.log("上传成功",event);
    
  }
  failedUpload(event) {
    alert("失败");
    console.log("上传失败", event);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PageExamplePage');
  }

}
