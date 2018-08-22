import { Component, Input,ViewChild} from '@angular/core';

import { Slides } from 'ionic-angular';

@Component({
  selector: 'slides-component',
  templateUrl: 'slides.html'
})

export class SlidesComponent {
 
  @Input() slidesList:any;

  constructor() {
  
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
