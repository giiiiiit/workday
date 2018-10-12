import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, PopoverController   } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'check-find-add',
    templateUrl: 'check-find-add.html',
})
/**
 * 业务功能：添加审核发现
 */
export class checkFindAddPage {
  /**
   * tab页默认激活状态
   */
  activeTab = '0';
  /**
   * 添加数据初始化
   */
  curDate: Date;


  activeData = {
    departmentName:"被审核单位名称",
    level:{
      key: "一般",
      value: "NOMAL"
    },
    lastTime:"2018-09-11",
    discribe:"",
    imgAppendix:[
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
    videoAppendix: []
   
   
  }
  /**
   * 视频播放配置参数
   */
  videoOption= {
    videoSrc: this.activeData.videoAppendix[0],
    loop: true,
    watermark: true,
    watermarkType: 'text',
    watermarkTextOrUrl: '我是水印'
  }
  /**
   * 视频上传配置参数
   */
  uploadVideo = {
    imgUrl: 'assets/imgs/video.png',
    serverUrl: 'http://192.168.4.95:8080/practice_server/filaAction.do',
    type: 'video',//上传类型：img/video/file
    source: 'imgPicker',//imgPicker/camera/selectSource
  }
  /**
   * 图片上传配置参数
   */
  uploadImgFromCameraOrLib = {
    imgUrl: 'assets/imgs/sign-save2.png',
    serverUrl: 'http://192.168.4.95:8080/practice_server/filaAction.do',
    type: 'img',//上传类型：img/video/file
    source: 'selectSource',//imgPicker/camera/selectSource
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public modalCtrl: ModalController, public popoverCtrl: PopoverController) {
    /**
     * 限改日期为下月日期
     */
    this.curDate = new Date();
    this.curDate.setDate(this.curDate.getDate() + 30);

    let date = this.curDate.toLocaleDateString().slice(0, 4) + "-" + this.curDate.toLocaleDateString().slice(5, 7) + "-" + this.curDate.toLocaleDateString().slice(8)
    console.log("this.curDate", date);
    this.activeData.lastTime = date;


    // if (navParams.data.level != undefined){
    //   this.activeData.level = navParams.data.level;
    // }
    if (navParams.data.department != undefined) {
      this.activeData.departmentName = navParams.data.department.level + "/" + navParams.data.department.name;
    }
  }
  /**
   * 删除视频函数
   */
  confirmDeleteVideo() {
    let alert = this.alertCtrl.create({
      title: '确定要删除吗？',
      // message: 'Do you want to buy this book?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            this.activeData.videoAppendix.splice(0, 1)
          }
        }
      ]
    });
    alert.present();
  }
  // deleteVideo(){
  //   this.activeData.videoAppendix.splice(0, 1)
  // }
  /**
   * 
   * 删除图片函数
   */
  confirmDeleteImg(i){
    let alert = this.alertCtrl.create({
      title: '确定要删除吗？',
      // message: 'Do you want to buy this book?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            this.activeData.imgAppendix.splice(i, 1)
          }
        }
      ]
    });
    
    alert.present();
  }

  /**
   * 
   * 上传成功后的回调函数
   */
  afterUpload(event) {
    
  }
  /**
   * 监听描述字数
   * @param event
   */
  discribeChange(event){
    
    if(event.length>500){
      this.activeData.discribe = "";
      setTimeout(() => {
        this.activeData.discribe = event.slice(0, 500);
      }, 10);
      
    }
  }
  /**
   * 选择审核单位
   */
  selectDepartment(){
    const popover2 = this.popoverCtrl.create('departmentTreePage', { }, { cssClass: "popover-content-zxj" });
    popover2.onDidDismiss(data => {
      if (data != undefined){
        this.activeData.departmentName = data.department.level + "/" + data.department.name;
      }
    });
    popover2.present();
    // this.navCtrl.push("departmentTreePage");
  }
  /**
   * 选择问题性质 enterAnimation?: string;
    leaveAnimation?:
   */
  selectProblemProperty(){
    const popover = this.popoverCtrl.create('prpblemPropertyPage', { level: this.activeData.level }, { cssClass:"popover-content-zxj"});
    popover.onDidDismiss(data => {
      if (data != undefined) {
        this.activeData.level = data.level;
      }
     
    });
    popover.present();
  }
  /**
   * 返回函数
   */
  back() {
    
    this.navCtrl.pop();
  }
  /**
   * 切换按钮函数
   * @param str 
   */
  switchTab(str) {
    this.activeTab = str;
  }

  ionViewDidLoad() {
    
  }

}
