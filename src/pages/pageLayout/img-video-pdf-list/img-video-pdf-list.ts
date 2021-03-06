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
  selector: 'img-video-pdf-list',
  templateUrl: 'img-video-pdf-list.html',
})
/**
 * 业务功能：图片、视频、pdf列表
 */
export class imgVideoPdfListPage {
  /**
   * 默认显示pdf
   */
  activeTab = "pdf";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 /**
  * pdf列表数据
  */
  pdfList = [
    {
      title:"事业编改革后事业编改革后事业编改革后事业编改革后事业编改革后事业编改革后",
      content:"由于编制的取消，很多考生踌躇不已，不知道自己是否还应该有考的必要。去考呢，现在的事业单位人员的福利待遇已经远远比不过公务员了；不去考呢，公务员考试也不简单，担心自己花费时间却考不上。"
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
  /**
   * 图片列表数据
   */

  imgList = ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535619151050&di=a169eb2dd8de94f4d9cee26068d3bdd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa1ec08fa513d26979cad5ec05ffbb2fb4316d835.jpg']
  
  /**
   * 视频播放配置
   */
  videoOPtion = {
    videoSrc: 'http://static.videogular.com/assets/videos/videogular.mp4',
    loop: true,
    watermark: true,
    watermarkType: 'text',
    watermarkTextOrUrl: '我是水印',
    poster: 'assets/imgs/defaultPoster.png'
  }
  /**
   * 视频数据列表
   */
  videoList = [{
    videoSrc: 'http://static.videogular.com/assets/videos/videogular.mp4',
    loop: true,
    watermark: true,
    watermarkType: 'text',
    watermarkTextOrUrl: '我是水印'
  }, {
      videoSrc: 'http://static.videogular.com/assets/videos/videogular.mp4',
      loop: true,
      watermark: true,
      watermarkType: 'text',
      watermarkTextOrUrl: '我是水印'
    }, {
      videoSrc: 'http://static.videogular.com/assets/videos/videogular.mp4',
      loop: true,
      watermark: true,
      watermarkType: 'text',
      watermarkTextOrUrl: '我是水印'
    }]

  /**
   * 切换tab
   * @param str 
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
  
  ionViewDidLoad() {
    
  }

}
