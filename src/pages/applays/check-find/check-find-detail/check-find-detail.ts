import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'check-find-detail',
    templateUrl: 'check-find-detail.html',
})
/**
 * 业务功能：审核发现详情
 */
export class checkFindDetailPage {
 
  /**
   * 数据初始化
   */
  activeData = {
    name:"安庆油田/一部",
    level:{
      key:"一般",
      value:"NORMAL"
    },
    lastDate:"2018-09-13",
    describe:"Web前端开发是从网页制作演变而来，其中包括三个要素：HTML、CSS和JavaScript；Web前端用人数量已经远远超过主流编程语言的开发人员的数量。",
    imgAppendix: [
      'assets/imgs/slide1.jpg',
      'assets/imgs/slide1.jpg',
      'assets/imgs/slide1.jpg',
      'assets/imgs/slide1.jpg',
      'assets/imgs/slide1.jpg',
      'assets/imgs/slide1.jpg',
      'assets/imgs/slide1.jpg',
      'assets/imgs/slide1.jpg',
      'assets/imgs/slide1.jpg'
    ],
    videoAppendix: ['http://static.videogular.com/assets/videos/videogular.mp4'],
    theme:"设备管理",
    checkItem:'日常管理',
    checkContent:"使用和维护",
    coreItem:"1.基础设备完整1.基础设备完整1.基础设备完整1.基础设备完整1.基础设备完整",
    problemList:[{
      content:"生产环境不够整洁，设备摆放不够规范，纪律布严明",
      author:"张三"
    }]

  }
  /**
   * 视频播放组件参数配置
   */
  videoOption = {
    videoSrc: 'http://static.videogular.com/assets/videos/videogular.mp4',
    loop: true,
    watermark: true,
    watermarkType: 'text',
    watermarkTextOrUrl: '我是水印'
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {

  }
  /**
   * 返回函数
   */
  back() {
    this.navCtrl.pop();
  }
    
  showBigImg(index) {
    let shouList = [];
    this.activeData.imgAppendix.forEach(function (item) {
      if (item != undefined) {
        shouList.push({ url: item });
      } else {
        shouList.push({ url: item })
      }
    });
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: shouList,
      initialSlide: index
    });
    modal.present();
  }
  ionViewDidLoad() {
    
  }

}
