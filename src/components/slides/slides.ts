import { Component, Input,ViewChild} from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'slides-component',
  templateUrl: 'slides.html'
})

/* 组件使用说明
  功能：相册图片查看器-轮播图
  入参说明：slidesList：字符串数组，要轮播的图片信息，必填,数据格式如下：
              ["assets/imgs/slide1.jpg", "assets/imgs/slide2.jpg", "assets/imgs/slide3.jpg"];
           pagers：boolean型数据，是否显示轮播记载器，非必填，默认显示
  返回值：无
  用例：<slides-component [slidesList]="imgList1" [pagers]="true"></slides-component>
*/

export class SlidesComponent {
 
  @Input() slidesList:any;
  @Input() pagers: Boolean;

  constructor() {}
 
  ngOnInit(): void {
    if (this.pagers == undefined){
      this.pagers = true;
    }
  }
  @ViewChild(Slides) slides: Slides;
  //解决切换其他页面回去轮播图不动问题
 
  ionViewWillEnter() {
    this.slides.startAutoplay();
  }
  ionViewWillLeave() {
    this.slides.stopAutoplay();
  }
  ionViewDidEnter() {
    this.slides.startAutoplay();
  }
}
