import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { Feedback } from '../../base/Feedback';
@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})

export class TestPage {
  @ViewChild('selectComponent') selectComponent:any;
  @ViewChild('sidemenuselect') sidemenuSelect:any;
  componentType: string;
  componentTitle: string;
  menutype: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private feedback: Feedback, public alertCtrl: AlertController) {
    // console.log(this.navParams.get('type'));
    this.componentTitle = this.navParams.get('componentTitle');
    this.menutype = this.navParams.get('type');
    if (!this.navParams.get('componentType')) {
      this.componentType = 'SideMenuSelectComponent';
    } else {
      this.componentType = this.navParams.get('componentType');
      if (this.componentType === 'SelectMenuTopComponent') {
        this.menutype = 'card'
      } else if (this.componentType === 'SelectMenuBottomComponent') {
        this.menutype = 'modal'
      }
    }
  }
  // 联级组件数据
  selectData = [
    {
      id: '1',
      title: '99成新'
    },
    {
      id: '2',
      title: '9成新'
    },
    {
      id: 3,
      title: '8成新'
    },
    {
      id: 4,
      title: '8.5成新'
    },
    {
      id: '5',
      title: '7成新'
    },
    {
      id: '6',
      title: '6成新'
    },
    {
      id: '7',
      title: '5成新'
    },
    {
      id: '8',
      title: '废品'
    }
  ];
  selectDataMore = [
    {
      tabName: '区域',
      itemData: this.selectData
    },
    {
      tabName: '分类',
      itemData: this.selectData
    },
    {
      tabName: '价格',
      itemData: this.selectData
    },
    {
      tabName: '成色',
      itemData: this.selectData
    }
  ];
  selectTitle = '请选择成色';
  itemdatas: string;
  selectChange(itemdata: Object) {
    this.itemdatas = JSON.stringify(itemdata);
    this.feedback.Toast({
      msg: this.itemdatas
    });
  }
  openmodal(type) {
    if (type === 'side') {
      this.sidemenuSelect.open();
    } else {
      this.selectComponent.openModal(type);
    }
  }
  // 地图标记点经纬度
  markers = [[123.481002,41.69384],[123.476281,41.697877],[123.466797,41.69682]];

  // 手写板配置项
  public signpadOptionsValue:object = {
    tabOptions: {
      tabStatus: true, // 启动自定义画板，默认为true；PS：penColor和maxWidth配置无效
      arrayNumbers: [8.0, 6.0, 4.0, 2.0, 1.0], //画笔粗细 number类型
      arrayColors: ['#333', '#fff111', '#3366cc', '#666', '#ff9900'] //画笔颜色 string
    },
    minWidth: 1.0, // 笔锋 float
    maxWidth: 5.0, // 粗细 float
    throttle: 20, // default 16 每秒绘制的次数,越细腻 int
    canvasHeight: 325,
    penColor: '#eee', // 画笔颜色
    backgroundColor: '#fff' // 背景颜色
  }
  onsignImgUrl(ImgUrl: string){
    console.log('返回成功')
    console.log(ImgUrl);
    this.feedback.Toast({
      msg: '图片生成为: base64' + ImgUrl
    });
    // const alert = this.alertCtrl.create({
    //   title: '生成为base64',
    //   subTitle: ImgUrl,
    //   buttons: ['确定']
    // });
    // alert.present();
  }

}
