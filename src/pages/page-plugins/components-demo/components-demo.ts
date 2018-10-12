import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { imgLazyLoadComponent } from '../../../components/img-lazyLoad/img-lazyLoad';



/**
 * Generated class for the PageExamplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'components-demo',
  templateUrl: 'components-demo.html',

})


export class comonentsDemoPage {


  afterUpload(event){
    console.log("%%%"+event);
  }
  downImgOption = {
    imgUrl: 'assets/imgs/download.png',
    contentUrl:'http://192.168.4.95:8080/file/BBA47AA534114314A302591C83E1F8B8.mp4'
  }
  uploadImgFromCamera = {
    imgUrl: 'assets/imgs/red-upload.png',
    serverUrl: 'http://192.168.4.95:8080/practice_server/filaAction.do',
    type: 'img',//上传类型：img/video/file
    source: 'camera',//imgPicker/camera/selectSource
    opacity: '100',//清晰度
    resultWidth: 700,//图片的宽
    resultHeight: 200//图片的高
  }

  uploadImgFromLib = {
    imgUrl: 'assets/imgs/red-upload.png',
    serverUrl: 'http://192.168.4.95:8080/practice_server/filaAction.do',
    type: 'img',//上传类型：img/video/file
    source: 'imgPicker',//imgPicker/camera/selectSource
    resultWidth: 700,//图片的宽
    resultHeight: 200//图片的高
  }

 
  uploadImgFromCameraOrLib = {
    imgUrl: 'assets/imgs/red-upload.png',
    serverUrl: 'http://192.168.4.95:8080/practice_server/filaAction.do',
    type: 'img',//上传类型：img/video/file
    source: 'selectSource',//imgPicker/camera/selectSource
  }

  uploadVideo = {
    imgUrl: 'assets/imgs/red-upload.png',
    serverUrl: 'http://192.168.4.95:8080/practice_server/filaAction.do',
    type: 'video',//上传类型：img/video/file
    source: 'imgPicker',//imgPicker/camera/selectSource
  }
  uploadFile = {
    imgUrl: 'assets/imgs/red-upload.png',
    serverUrl: 'http://192.168.4.95:8080/practice_server/filaAction.do',
    type: 'file',//上传类型：img/video/file
  }

 test(id){
   console.log(id);
 }
  treeDataOption = {
    nodes: [
      {
        name: 'root1',
        bindText: '总人数：10人',
        level:'/',
        showChild: false,
      },
      {
        name: 'root2',
        bindText: '总人数：108人',
        level: '/',
        showChild: false,
        children: [
          {
            name: 'childA',
            bindText: '总人数：10人',
            level: '/root2',
            showChild: false,
            children: [
              {
                name: 'childAA',
                bindText: '总人数：10人',
                level: '/root2/childA',
                showChild: false,
                children: [
                  {
                    name: 'childAAA',
                    level: '/root2/childA/childAA',
                    bindText: '总人数：10人'
                  },
                  {
                    name: 'childAAB',
                    level: '/root2/childA/childAA',
                    bindText: '总人数：10人'
                  }
                ]
              },
              {
                name: 'childAB',
                bindText: '总人数：10人',
                level: '/root2/childA',
                showChild: false,
                children: [
                  {
                    name: 'childABA',
                    level: '/root2/childA/childAB',
                    bindText: '总人数：10人',
                  },
                  {
                    name: 'childABB',
                    level: '/root2/childA/childAB',
                    bindText: '总人数：10人',
                  }

                ]
              }
            ]
          },
          {
            name: 'childB',
            bindText: '总人数：10人',
            level: '/root2',
            showChild: false,
            children: [
              {
                name: 'childBA',
                bindText: '总人数：10人',
                level: '/root2/childB',
                showChild: false,
                children: [
                  {
                    name: 'childBAA',
                    level: '/root2/childB/childBA',
                    bindText: '总人数：10人',
                  },
                  {
                    name: 'childBAB',
                    level: '/root2/childB/childBA',
                    bindText: '总人数：10人',
                  }
                ]
              },
              {
                name: 'child2BB',
                bindText: '总人数：10人',
                level: '/root2/childB',
                showChild: false,
                children: [
                  {
                    name: 'childBBA',
                    bindText: '总人数：10人',
                    level: '/root2/childB/child2BB',
                  },
                  {
                    name: 'childBBB',
                    bindText: '总人数：10人',
                    level: '/root2/childB/child2BB',
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    btnText:'点我切换',
    clickFn: this.test
  }

  videoOPtion = {
    videoSrc: 'http://static.videogular.com/assets/videos/videogular.mp4',
    loop: true,
    watermark: true,
    watermarkType: 'text',
    watermarkTextOrUrl: '我是水印',
    poster: 'assets/imgs/defaultPoster.png'
  }
  clock: any;
  componentType: string;
  componentTitle: string;
  slidsOption ={
    slidesList:["assets/imgs/slide1.jpg", "assets/imgs/slide2.jpg", "assets/imgs/slide3.jpg"],
    pagers:true
  }
 
  imgList2 = [
    { url: "assets/imgs/slide1.jpg", urlBig: "assets/imgs/slide1.jpg" }, { url: "assets/imgs/slide1.jpg", urlBig: "assets/imgs/slide1.jpg" }, { url: "assets/imgs/slide2.jpg", urlBig: "assets/imgs/slide2.jpg" }, { url: "assets/imgs/slide3.jpg", urlBig: "assets/imgs/slide3.jpg" }];
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {



    this.componentTitle = this.navParams.get('componentTitle');
    if (!this.navParams.get('componentType')) {
      this.componentType = this.navParams.get('componentType');
    } 
  }
  // 懒加载图片
  @ViewChildren(imgLazyLoadComponent) private childCmps: any;
  contentScroll(event) {
    this.childCmps.forEach((child) => { 
      child.lazyRender(event);
    });
  }

  optionPie = {
    echartOption:{
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
    },
    watermark: true,
    watermarkType: 'text',
    watermarkTextOrUrl: '我是水印'

  }
  optionBar = {
    echartOption: {
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
    },
    watermark: true,
    watermarkType: 'text',
    watermarkTextOrUrl: '我是水印'
   
  };
  optionLine = {
    echartOption: {
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
    },
    watermark: true,
    watermarkType: 'text',
    watermarkTextOrUrl: '我是水印'
  }
  pdfOption={
    pdfSrc:"http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
    watermark: "true",
    watermarkType:"text",
    watermarkTextOrUrl: "我是水印"
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PageExamplePage');
  }
  recieveNotice(event) {
    alert("收到通知"+event);
  }
  openNotice(event) {
    alert("打开通知"+ event);
  }
}
