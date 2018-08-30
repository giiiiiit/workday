import { Component, Input, ElementRef, ViewChild, AfterViewChecked, OnInit } from '@angular/core';


@Component({
  selector: 'img-lazyLoad',
  template: `
  <img src="{{imgurl}}" alt="">
  `,
})

export class imgLazyLoadComponent {

  imgurl: string;
  @Input() src: string; //要显示的图片

  @Input() default: string;
  constructor() {

  }


  ngOnInit() {
    if (this.default == undefined) {
      this.default = "assets/imgs/slide1.jpg";
    }
    this.imgurl = this.default;

    //如果在屏幕区域中，加载图片
    
    this.imgload();
    // let img = new Image();
    // img.src = this.src;
    // img.onload = () => {
    //   this.default = this.src;
    // }

  }

  imgload() {
    this.imgurl =this.src;
  }


}
